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

// MainChat component
const MainChat = ({ chat }) => {
    return (
        <div className="div-66">
            <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/457ad3832c45ecfd94601583f7dd264d7a39e9912c1dc245ef996c5ef8e90c9a?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                className="img-17"
            />
            <div className="div-67">
                <div className="div-68">
                    <div className="div-69">{chat.reciverEmail}</div>
                    <div className="div-70">{chat.timestamp}</div>
                </div>
                <div className="div-71">
                    {chat.message}
                </div>
            </div>
        </div>
    );
};

// SideChat component
const SideChat = ({ chat }) => {
    return (
        <div className="div-16">
            <img
                loading="lazy"
                srcSet={chat.imageUrl}
                className="img-8"
            />
            <div className="div-17">
                <div className="div-18">
                    <div className="div-19">{chat.reciverEmail}</div>
                    <div className="div-20">{chat.timestamp}</div>
                </div>
                <div className="div-21">{chat.message}</div>
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
        <div className="div-main">
            <Header
                className="header-instance"
                img="material-symbols-notifications-outline-2.svg"
                layer="layer-1-2.png"
                maskGroup="mask-group-2.png"
                materialSymbols="material-symbols-search-2.svg"
                memoryMessage="memory-message-2.svg"
                tablerSettings="tabler-settings-2.svg"
            />
            <div className="div-8">
                <div className="div-9">
                    <div className="column">
                        <div className="message">
                            <div className="div-10">Messages</div>
                            <div className="div-14">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c527379fc0a546f052e08a49601217fc4d02ddc17f4794449b4983f06ef1e540?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                                    className="img-7"
                                />
                            </div>
                        </div>
                        <div className="div-11">
                            <div className="div-15">
                                {chats.map((chat) => (
                                    <SideChat key={chat.id} chat={chat} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="column-2">
                        <div className="div-47">
                            <div className="div-48">
                                <img
                                    loading="lazy"
                                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/33a3905fef1774b9cbe1b167aff0db826829769b6eb1dc2c0c0d0fec0342789b?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a3905fef1774b9cbe1b167aff0db826829769b6eb1dc2c0c0d0fec0342789b?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a3905fef1774b9cbe1b167aff0db826829769b6eb1dc2c0c0d0fec0342789b?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a3905fef1774b9cbe1b167aff0db826829769b6eb1dc2c0c0d0fec0342789b?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a3905fef1774b9cbe1b167aff0db826829769b6eb1dc2c0c0d0fec0342789b?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a3905fef1774b9cbe1b167aff0db826829769b6eb1dc2c0c0d0fec0342789b?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a3905fef1774b9cbe1b167aff0db826829769b6eb1dc2c0c0d0fec0342789b?apiKey=1504e5e6f32d49db86245656e24c0c9a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/33a3905fef1774b9cbe1b167aff0db826829769b6eb1dc2c0c0d0fec0342789b?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                                    className="img-14"
                                />
                                <div className="div-49">
                                    <div className="div-50">Habeeb Munir</div>
                                    <div className="div-51">9:30AM EST</div>
                                </div>
                            </div>
                            <div className="div-52" />
                                {/* ... */}
                                <div className="div-53">
                                    {chats.map((chat) => (
                                        <MainChat key={chat.id} chat={chat} />
                                    ))}
                                </div>
                                <div className="div-78">
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
                  <div className="div-79">
                    <div className="div-80">
                    <div className="div-60">
                                    <input
                                        type="text"
                                        placeholder="Type a message..."
                                        className="input"
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" && e.target.value.trim() !== "") {
                                                const newMessage = {
                                                    id: Date.now(),
                                                    message: e.target.value,
                                                    name: user.displayName,
                                                    timestamp: new Date().toLocaleString(),
                                                    imageUrl: user.photoURL,
                                                };

                                                const chatRef = doc(db, 'chat_rooms', props.selectedChat.id);
                                                setDoc(chatRef, {
                                                    messages: [...props.selectedChat.messages, newMessage],
                                                }, { merge: true });

                                                e.target.value = "";
                                            }
                                        }}
                                    />
                                </div>
                      <div className="div-82">
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
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f98837f4fe532a6e40419f12011ff2dfb1308ebdab109878af9087403b3a8ed8?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                      className="img-24"
                    />
                  </div>
                  </div>

                                
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chats;
