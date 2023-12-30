"use client"
// Import necessary modules and styles
import * as React from "react";
import "../../globals.css";
import "../style.css";
import Header from "../../components/header";
import authService from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { useParams } from 'next/navigation';
import { getFirestore, collection, doc, setDoc, orderBy, query, addDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { firebaseConfig } from '../../firebaseConfig';
import { initializeApp } from "firebase/app";
import { useCollection, useCollectionData, useDocumentData } from "react-firebase-hooks/firestore";
import { db } from "../../firebaseConfig";
import Sidebar from "../Sidebar";
import getOtherEmail from "../utils/getOtherEmail";
import getOtherUsername from "../utils/getOtherUsername";
import { useState, useEffect } from "react";
import "./id.css";



const formatTimestamp = (timestamp) => {
    if (!timestamp || isNaN(timestamp.toMillis())) {
        return "Invalid Timestamp";
      }
    
      const date = new Date(timestamp.toMillis());
    
      if (isMobile) {
        const options = {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        };
        return new Intl.DateTimeFormat('en-US', options).format(date);
      } else {
        const options = {
          month: 'numeric',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        };
        return new Intl.DateTimeFormat('en-US', options).format(date);
      }
  };

// MainChat component
const MainChat = ({ msg }) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 991);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      const formatTimestamp = (timestamp) => {
        if (!timestamp || isNaN(timestamp.toMillis())) {
            return "Invalid Timestamp";
          }
        
          const date = new Date(timestamp.toMillis());
        
          if (isMobile) {
            const options = {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            };
            return new Intl.DateTimeFormat('en-US', options).format(date);
          } else {
            const options = {
              month: 'numeric',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
              hour12: true,
            };
            return new Intl.DateTimeFormat('en-US', options).format(date);
          }
      };
    const [senderUsername, setSenderUsername] = React.useState('');

    React.useEffect(() => {
      const fetchSenderUsername = async () => {
        const username = await getOtherUsername(msg.sender);
        setSenderUsername(username);
      };
  
      fetchSenderUsername();
    }, [msg.sender]);

    
    return (
        <div className="chat-div-66">
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                className="img-17"
            />
            <div className="chat-div-67">
                <div className="chat-div-68">
                    <div className="chat-div-69">{senderUsername}</div>
                    <div className="chat-div-70">{formatTimestamp(msg?.timestamp)}</div>
                </div>
                <div className="chat-div-71">
                    {msg.text}
                </div>
            </div>
        </div>
    );
};

const SendMessager = () => {
    const [input, setInput] = useState ("");
    const { id } = useParams();
    const user = authService.user;
    const sendMessage = async (e) => {
        e.preventDefault();
        console.log(db)
        await addDoc(collection(db, `chats/${id}/messages`),{
            text: input,
            sender: user.email,
            timestamp: serverTimestamp()
        })
        setInput("");
        console.log("obalyeehoo")
    }
    return (
        <div className="chat-div-78">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7d9c09a68a56022839d2df583da2363c5bb956da2e1a002af13228e581dff04?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                className="img-19"
            />
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7098d7417e414373da5a5003d4424f737a1ce2fdd5e22f6d877b534396e1ebe1?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                className="img-20"
            />
            <div className="chat-div-79">
                <div className="chat-div-80">
                    <div className="chat-div-60">
                        <input
                            type="text"
                            value={input}
                            placeholder="Type a message..."
                            className="input"
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && e.target.value.trim() !== "")
                                 {sendMessage}
                            }}
                            onChange={e => setInput(e.target.value)}
                        />
                    </div>
                    <div className="chat-div-82">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c736e724e4ae4f5025c51b38bb844f9fdcb40286d198c046521ecbb5e7fcab4?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                            className="img-21"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f11712c13d278a2ee533531e1c277545ea88b1352b9de3cbc73e59d51b1a1d7d?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                            className="img-22"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e88aad37c5767588c6318757af5d88434b89ab7208a5aefa99976b5e38182c4?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                            className="img-23"
                        />
                    </div>
                </div>
                <img onClick={sendMessage}
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f98837f4fe532a6e40419f12011ff2dfb1308ebdab109878af9087403b3a8ed8?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                    className="img-24"
                />
            </div>
        </div>
    )
}


// Chats component
const Chats = (props) => {
    const user = authService.user;
    const { id } = useParams();
    const q = query(collection(db, "chats", id, "messages"), orderBy("timestamp"))
    const [messages] = useCollectionData(q);
    const [chat] = useDocumentData(doc(db, 'chats', id));
    const topEmail = getOtherEmail(chat?.users, user)

    
    const formatTimestamp = () => {
        const currentDate = new Date();

        const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
            
        };

        return new Intl.DateTimeFormat('en-US', options).format(currentDate);
    };
    
    const [senderUsername, setSenderUsername] = React.useState('');

    useEffect(() => {
        const fetchSenderUsername = async () => {
            if (topEmail) {
                // Assuming you have a "users" collection in your database
                const userDoc = await getDoc(doc(db, 'User', topEmail));
                if (userDoc.exists()) {
                    const username = userDoc.data().username;
                    setSenderUsername(username);
                }
            }
        };

        fetchSenderUsername();
    }, [topEmail]);


    
    return (
        <div className="chat-div-main">
            <Header
                className="header-instance"
                
            />
            <div className="chat-div-8">
                <div className="chat-div-9">
                    <Sidebar redirectUrl="/chat" />
                    <div className="column-2">
                        <div className="chat-div-47">
                            <div className="chat-div-48">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/33a3905fef1774b9cbe1b167aff0db826829769b6eb1dc2c0c0d0fec0342789b?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a3905fef1774b9cbe1b167aff0db826829769b6eb1dc2c0c0d0fec0342789b?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a3905fef1774b9cbe1b167aff0db826829769b6eb1dc2c0c0d0fec0342789b?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a3905fef1774b9cbe1b167aff0db826829769b6eb1dc2c0c0d0fec0342789b?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a3905fef1774b9cbe1b167aff0db826829769b6eb1dc2c0c0d0fec0342789b?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a3905fef1774b9cbe1b167aff0db826829769b6eb1dc2c0c0d0fec0342789b?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a3905fef1774b9cbe1b167aff0db826829769b6eb1dc2c0c0d0fec0342789b?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a3905fef1774b9cbe1b167aff0db826829769b6eb1dc2c0c0d0fec0342789b?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                                    className="img-14"
                                />
                                <div className="chat-div-49">
                                    <div className="chat-div-50">{senderUsername}</div>
                                    <div className="chat-div-51">{formatTimestamp()}</div>
                                </div>
                            </div>
                            <div className="chat-div-52" />
                            {/* ... */}
                            <div className="chat-area">

                                <div className="chat-div-53">
                                    {messages?.map((msg) => (
                                        <MainChat key={Math.random()} msg={msg} />
                                    ))}
                                </div>
                                    <SendMessager />

                            </div>



                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chats;
