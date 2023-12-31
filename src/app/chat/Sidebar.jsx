"use client"
import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import "../globals.css";
import "./style.css";
import Header from "../components/header";
import authService from "../context/AuthContext";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebaseConfig";
import getOtherEmail from "./utils/getOtherEmail";
import getOtherUsername from './utils/getOtherUsername';
import { getFirestore, collection, doc, setDoc, query, orderBy, limit, getDocs, onSnapshot } from 'firebase/firestore';
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
  const [user, setUser] = useState(null);
  const [snapshotData, setSnapshotData] = useState(null);
  const [chats, setChats] = useState([]);
  const [chatsWithLastMessage, setChatsWithLastMessage] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await authService.user;
      setUser(userData);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'chats'), (snapshot) => {
      console.log('Snapshot Data:', snapshot.docs);
      setSnapshotData(snapshot);

    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchChatsFromSnapshot = async () => {
      if (snapshotData) {
        const fetchedChats = snapshotData.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .filter((chat) => chat.users.includes(authService.user.email));
        console.log('Fetched Chats:', fetchedChats);
        setChats(fetchedChats);
  
        // Fetch the last message for each chat
        const chatsWithLastMessage = await Promise.all(
          fetchedChats.map(async (chat) => {
            const messagesSnapshot = await getDocs(
              collection(db, 'chats', chat.id, 'messages'),
              {
                orderBy: ['timestamp', 'desc'],
                limit: 1,
              }
            );
            const lastMessage = messagesSnapshot.docs[0]?.data();
            return { ...chat, lastMessage: lastMessage || { text: '', timestamp: null } };
          })
        );
        console.log('Chats with last message:', chatsWithLastMessage);
        setChatsWithLastMessage(chatsWithLastMessage);
      }
    };
  
    fetchChatsFromSnapshot();
  }, [snapshotData]);

  const filteredChatsWithLastMessage = useMemo(() => {
    console.log('chatsWithLastMessage:', chatsWithLastMessage);
    console.log('searchTerm:', searchTerm);
  
    return chatsWithLastMessage
      .map((chat) => ({
        ...chat,
        lastMessage: chat.lastMessage || { text: '', timestamp: null },
      }))
      .filter((chat) =>
        chat.lastMessage?.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [chatsWithLastMessage, searchTerm]);

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
          {filteredChatsWithLastMessage.map((chat) => (
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
