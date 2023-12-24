"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./header.css";
import Menu from "./menu";
import Link from "next/link";
import authService from "../context/AuthContext";

export const Header = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = authService.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return () => unsubscribe();
  }, []);

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
              img="line-2.svg"
              line="line-2.svg"
              line1="line-2.svg"
              property1="default"
            />
            <img className="layer" alt="Layer" src="layer-1.png" />
          </div>
          <div className="frame-2-right">
            <img
              className="material-symbols"
              alt="Material symbols"
              src="material-symbols-search.svg"
            />
          </div>
        </div>
      </div>
      <div className="header">
        <img className="layer" alt="Layer" src="layer-1.png" />
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
            src="material-symbols-search.svg"
          />
          <div className="text">Search for Attorneys</div>
        </button>
        <div className="div">
          <img
            className="memory-message"
            alt="Memory message"
            src="memory-message.svg"
          />
          <img
            className="img"
            alt="Tabler settings"
            src="tabler-settings.svg"
          />
          <img
            className="img"
            alt="Material symbols"
            src="material-symbols-notifications-outline.svg"
          />

          {user && (
            <div className="profile-pic">
              <img
                className="mask-group"
                alt="Mask group"
                src={user.photoURL}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
