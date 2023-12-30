"use client"
import * as React from "react";
import { useRouter } from "next/navigation";
import "../globals.css";
import "./style.css";
import Header from "../components/header";
import authService from "../context/AuthContext";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebaseConfig";
import getOtherEmail from "./utils/getOtherEmail";
import getOtherUsername from './utils/getOtherUsername';
import { getFirestore, collection, doc, setDoc, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { Timestamp } from 'firebase/firestore';



// SideChat component
const SideChat = ({ chat, user, redirectUrl, lastMessage }) => {
    const router = useRouter();
    const [otherUsername, setOtherUsername] = React.useState('');
    const formatTimestamp = (timestamp) => {
        if (!timestamp || !(timestamp instanceof Timestamp)) {
            return "Invalid Timestamp";
        }

        const date = timestamp.toDate(); // Convert Timestamp to Date object

        const options = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
        };

        return date.toLocaleDateString("en-US", options);
    };


    React.useEffect(() => {
        const fetchOtherUsername = async () => {
            const username = await getOtherUsername(getOtherEmail(chat.users, user));
            setOtherUsername(username);
        };

        fetchOtherUsername();
    }, [chat.users, user]);

    if (!user) {
        return null;
    }

    const redirect = (id) => {
        router.push(`${redirectUrl}/${id}`);
    };

    return (
        <div className="chat-div-16" onClick={() => redirect(chat.id)}>
            <img loading="lazy" srcSet={chat.imageUrl} className="img-8" />
            <div className="chat-div-17">
                <div className="chat-div-18">
                    <div className="sidec-top">
                        <div className="chat-div-19">{otherUsername}</div>

                        {lastMessage ? (
                            <>
                                <div className="chat-div-20">{formatTimestamp(lastMessage.timestamp)}</div>
                            </>
                        ) : (
                            <div className="chat-div-20">No shit</div>
                        )}

                    </div>
                    {lastMessage ? (
                        <>
                            <div className="chat-div-21">{lastMessage.text}</div>
                        </>
                    ) : (
                        <div className="chat-div-20">No messages</div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Sidebar component
// ... (imports and other code)

const Sidebar = ({ redirectUrl }) => {
    const router = useRouter();
    const [user, setUser] = React.useState(null);
    const [snapshot, loading, error] = useCollection(collection(db, 'chats'));
    const [chats, setChats] = React.useState([]);
    const [chatsWithLastMessage, setChatsWithLastMessage] = React.useState([]); // Define state variable
    const [searchTerm, setSearchTerm] = React.useState('');
  
    // Helper function to get the last message and its timestamp from a chat
    const getLastMessage = async (chatId) => {
      const messagesQuery = query(
        collection(db, 'chats', chatId, 'messages'),
        orderBy('timestamp', 'desc'),
        limit(1)
      );
      const messagesSnapshot = await getDocs(messagesQuery);
      const lastMessage = messagesSnapshot.docs[0]?.data();
      return lastMessage;
    };
  
    React.useEffect(() => {
      // Fetch user data or use your authentication context's method
      const fetchUser = async () => {
        const userData = await authService.user;
        setUser(userData);
      };
  
      fetchUser();
    }, []);
  
    React.useEffect(() => {
      // Fetch and set the chats from the snapshot
      const fetchChatsFromSnapshot = () => {
        if (snapshot) {
          const fetchedChats = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setChats(fetchedChats);
        }
      };
  
      fetchChatsFromSnapshot();
    }, [snapshot]);
  
    // Use another useEffect to fetch and modify the chat data
    React.useEffect(() => {
      const fetchChatsWithLastMessage = async () => {
        const chatsWithLastMessage = await Promise.all(
          chats.map(async (chat) => {
            const lastMessage = await getLastMessage(chat.id);
            return {
              ...chat,
              lastMessage: lastMessage || { text: '', timestamp: null },
            };
          })
        );
  
        // Update the state with the modified chat data
        setChatsWithLastMessage(chatsWithLastMessage);
      };
  
      fetchChatsWithLastMessage();
    }, [chats, user]); // Make sure to include dependencies for the useEffect
  
    // Filter the chats based on the search term
    const filteredChats = chatsWithLastMessage.filter((chat) =>
      chat.lastMessage?.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="column">
        <div className="message">
          <div className="chat-div-10">Messages</div>
        </div>
        <div className="chat-div-11">
          <div className="msg-search">
            {/* Search input */}
            <div className="msg-search-1">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a30109b5efcfcc7344e13040eb3bff30e3293f5d4714e6f502f27316b0b04a18?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                className="imago"
              />
              <div className="serr">
                <input
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/657725d91857c0c9c17f92ba2217cf344d6ce02a81e8ca439301052f384cfd08?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
              className="imago"
            />
          </div>
          <div className="chat-div-15">
          {filteredChats.map((chat) => (
            <SideChat
              key={chat.id}
              chat={chat}
              user={user}
              redirectUrl={redirectUrl}
              lastMessage={chat.lastMessage} // Pass the lastMessage prop
            />
          ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  