"use client"
// Import necessary modules and styles
import * as React from "react";
import "../globals.css";
import "./style.css";
import Header from "../components/header";
import authService from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useParams } from 'next/navigation';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { firebaseConfig } from '../firebaseConfig';
import { initializeApp } from "firebase/app";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebaseConfig";
import Sidebar from "./Sidebar";
import "./main.css"

// MainChat component
const MainChat = ({ chat }) => {
    return (
        <div className="chat-div-66">
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                className="img-17"
            />
            <div className="chat-div-67">
                <div className="chat-div-68">
                    <div className="chat-div-69">{chat.reciverEmail}</div>
                    <div className="chat-div-70">{chat.timestamp}</div>
                </div>
                <div className="chat-div-71">
                    {chat.message}
                </div>
            </div>
        </div>
    );
};


// Chats component
const Chats = (props) => {
    const user = authService.user;
    const [snapshot, loading, error] = useCollection(collection(db, 'chat_rooms'));
    const chats = snapshot?.docs.map(doc => ({ id: doc.id, ...doc.data() })) || [];

    return (
        <div className="chat-div-main">
            <Header
                className="header-instance"
                img="material-symbols-notifications-outline-2.svg"
                layer="layer-1-2.png"
                maskGroup="mask-group-2.png"
                materialSymbols="material-symbols-search-2.svg"
                memoryMessage="memory-message-2.svg"
                tablerSettings="tabler-settings-2.svg"
            />
            <div className="chat-div-8">
                <div className="chat-div-9">
                <Sidebar redirectUrl="chat" />
                    <div className="column-2">
                        
                        <div className="appear">
                            Your messages will appear here. 
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chats;
