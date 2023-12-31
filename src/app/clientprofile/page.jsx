"use client"
import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Header from "../components/header";
import "./style.css";
import "../globals.css";
import ReviewCard from "./ReviewCard";
import Link from "next/link";
import {  query,where, getFirestore, collection, doc, getDocs, getDoc } from 'firebase/firestore';
import authService from '../context/AuthContext';

export default function ClientProfile() {
    const [userData, setUserData] = useState({
        username: "",
        about: "",
        imageUrl: "",
    });

    const [greenCards, setGreenCards] = useState([]);

    useEffect(() => {
        console.log('Inside useEffect');
        // Fetch user data from Firestore
        const fetchUserData = async () => {
            try {
              const user = authService.user;
              const userCollectionRef = collection(getFirestore(), 'User');
              const q = query(userCollectionRef, where('email', '==', user.email));
              const querySnapshot = await getDocs(q);
          
              if (!querySnapshot.empty) {
                // Since there should be only one document with the specified email, use the first one
                const userDataFromFirestore = querySnapshot.docs[0].data();
                setUserData(userDataFromFirestore);
                console.log('Fetched user data:', userDataFromFirestore);
              } else {
                console.log('User document does not exist');
              }
            } catch (error) {
              console.error('Error fetching user data:', error.message);
            }
          };
          

        // Fetch green cards from Firestore
        const fetchGreenCards = async () => {
            try {
                const user = authService.user;
                const greenCardsDocRef = doc(collection(getFirestore(), 'jobs_created'), user.email);
                const greenCardsDoc = await getDoc(greenCardsDocRef);

                if (greenCardsDoc.exists()) {
                    const greenCardsFromFirestore = greenCardsDoc.data().green_cards || [];
                    setGreenCards(greenCardsFromFirestore);
                    console.log(greenCardsFromFirestore)
                }
            } catch (error) {
                console.error('Error fetching green cards:', error.message);
            }
        };

        fetchUserData();
        fetchGreenCards();
    }, []);
    const profilePic = {
        backgroundImage: `url(${userData.imageUrl})`
    };

    return (
        <div className="client-profile">
            <div className="div">
                <div className="group">
                    <Header
                        className="header-instance"
                        img="material-symbols-notifications-outline-2.svg"
                        layer="layer-1-2.png"
                        maskGroup="mask-group-2.png"
                        materialSymbols="material-symbols-search-2.svg"
                        memoryMessage="memory-message-2.svg"
                        tablerSettings="tabler-settings-2.svg"
                    />
                    <div className="frame-29">
                        <div className="frame-3">
                            <div className="ic-baseline-plus-wrapper" style = {profilePic}>

                                <img className="ic-baseline-plus" alt="Ic baseline plus" src="ic-baseline-plus.svg" /> </div>
                            <div className="text-wrapper-2">{userData.username}</div>
                        </div>
                        <div className="text-wrapper-3">Illinois, USA</div>
                        <Link href="../EditClientProfile"> <Button property1="primary" text="EDIT PROFILE" /></Link>

                    </div>
                    <div className="frame-4">
                        <div className="text-wrapper-4a">Bio</div>
                        <p className="p">
                            {userData.about}
                        </p>
                    </div>
                    <div className="frame-5">
                        <div className="text-wrapper-4a">Services</div>
                        <div className="frame-6">
                            {greenCards.map((greenCard, index) => (
                                <Button
                                    key={index}
                                    className="button-instance"
                                    property1="secondary-hover"
                                    text={greenCard}
                                />
                            ))}
                        </div>
                        <div className="text-wrapper-5">Reviews</div>
                        <div className="frame-7">
                            <div className="group-2">
                                <div className="group-3">
                                    <div className="text-wrapper-6">Habeeb Munir</div>
                                    <div className="frame-8">
                                        <div className="frame-9">
                                            <div>
                                                <img className="frame-16" alt="Frame" src="frame-362-2.svg" />
                                            </div>
                                            <div>
                                            </div>
                                            <div className="text-wrapper-7">1</div>
                                        </div>
                                        <img className="line-2" alt="Line" src="line-22.svg" />
                                        <div className="text-wrapper-8">2 weeks ago</div>
                                    </div>
                                </div>
                                <p className="text-wrapper-9">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu.
                                </p>
                            </div>
                            <div className="group-4">
                                <div className="group-3">
                                    <div className="text-wrapper-6">Habeeb Munir</div>
                                    <div className="frame-8">
                                        <div className="frame-9">
                                            <div>
                                                <img className="frame-16" alt="Frame" src="frame-362-2.svg" />
                                            </div>

                                            <div className="text-wrapper-7"></div>
                                        </div>
                                        <img className="line-2" alt="Line" src="line-22-2.svg" />
                                        <div className="text-wrapper-8">2 weeks ago</div>
                                    </div>
                                </div>
                                <p className="text-wrapper-9">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    



                <div className="div-2">
                    <Header
                        className="header-instance"
                        img="material-symbols-notifications-outline-2.svg"
                        layer="layer-1-2.png"
                        maskGroup="mask-group-2.png"
                        materialSymbols="material-symbols-search-2.svg"
                        memoryMessage="memory-message-2.svg"
                        tablerSettings="tabler-settings-2.svg"
                    />
                    <div className="text-wrapper-2">Profile</div>
                    <div className="frame-3">
                        <div className="text-wrapper-3">Green Card Choices</div>
                        <div className="frame-4">
                            {greenCards.map((greenCard, index) => (
                                <Button
                                    key={index}
                                    className="button-instance"
                                    property1="secondary-hover"
                                    text={greenCard}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="frame-5">
                        <div className="frame-6">
                            <div className="frame-7">
                                <div className="group" style= {profilePic}>
                                    <img className="ic-baseline-plus" alt="Ic baseline plus" src="ic-baseline-plus.svg" />
                                </div>
                                <div className="text-wrapper-4a">{userData.username}</div>
                            </div>
                            <div className="text-wrapper-5">Arizona, USA</div>
                        </div>
                        <Button property1="primary" text="EDIT PROFILE" />
                    </div>
                    <div className="frame-8">
                        <div className="text-wrapper-3">Bio</div>
                        <p className="p">
                            {userData.about}
                        </p>
                    </div>
                    <div className="frame-9">
                        <div className="text-wrapper-6">Reviews</div>
                        <div className="frame-10">
                            <ReviewCard
                                name="Habeeb Munir"
                                location="Arizona, USA"
                                timePosted="2 weeks ago"
                                reviewBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu."
                            />

                            <img className="line-2" alt="Line" src="line-23.svg" />
                            <ReviewCard
                                name="Habeeb Munir"
                                location="Arizona, USA"
                                timePosted="2 weeks ago"
                                reviewBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu."
                            />
                        </div>
                    </div>
                </div>
            </div>
            );
};


