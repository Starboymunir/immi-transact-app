"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./header.css";
import Menu from "./menu";
import Link from "next/link";
import Searchbar from './Searchbar'; 
import authService from "../context/AuthContext";
import { searchUsers } from "./utils/Search"
import { getFirestore, collection, doc, setDoc, query, orderBy, limit, getDocs, where } from 'firebase/firestore';

export const Header = () => {
  const [userData, setUserData] = useState({
    username: "",
    about: "",
    imageUrl: "",
});

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const router = useRouter();
  const user = authService.user;
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
       
      } else {
        
        console.log('User document does not exist');
      }
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };
  fetchUserData();



  

  const handleLogout = async () => {
    await authService.signOut();
    router.push("/"); // Redirect to the home page after logout
  };
  const menuType = user ? "openOtherPages" : "default";

  return (
    <div className="headers">
      <div className="header-mobile">
        <div className="frame-2">
          <div className="frame-2-left">
            <Menu
              menuType={menuType}
              img="/line-2.svg"
              line="/line-2.svg"
              line1="/line-2.svg"
              property1="default"
            />
            <img className="layer" alt="Layer" src="/layer-1.png" />
          </div>
          <div className="frame-2-right">
            <img
              className="material-symbols search-btn "
              alt="Material symbols"
              src="/material-symbols-search.svg"
              onClick={() => setIsSearchVisible(!isSearchVisible)}
            />
          </div>
        </div>
      </div>
      <div className="header">
        <img className="layer" alt="Layer" src="/layer-1.png" />
        <div className="frame">
          <Link href="/dashboard">
            <div className="text-wrapper">Dashboard</div>
          </Link>
          <div className="text-wrapper">My Applications</div>
        </div>
        <button className="button">
          <img
            className="material-symbols"
            alt="Material symbols"
            src="/material-symbols-search.svg"
          />
          <input
          type="text"
          placeholder="Search for Attorneys"
          className="search-input"
          onFocus={() => setIsSearchVisible(true)}
        />

        </button>
        
        <div className="div">
          <img
            className="memory-message"
            alt="Memory message"
            src="/memory-message.svg"
          />
          <img
            className="img"
            alt="Tabler settings"
            src="/tabler-settings.svg"
          />
          <img
            className="img"
            alt="Material symbols"
            src="/material-symbols-notifications-outline.svg"
          />

          {user && (
            <div className="profile-pic">
              <img
                className="mask-group"
                alt="Mask group"
                src={userData?.imageUrl}
              />
            </div>
          )}
        </div>
      </div>
      {isSearchVisible && <Searchbar onClose={() => setIsSearchVisible(false)} />}
    </div>
  );
};

export default Header;