"use client"
import React from "react";
import Button from "../components/Button";
import "./style.css";
import "../globals.css";


export const ProfileCardFrame = ({
  username,
  imageUrl,
  rating,
  shortProfile,
  buttonTextClassName,
  maskGroup,
  memoryMessage,
  uisFavorite,
}) => {
  return (
    <div className="profile-card-frame">
      <div className="mask-div">
        <img className="mask-group" alt="Mask group" src={maskGroup} />
      </div>
      <div className="frame">
        <div className="div">
          <div className="text-wrapper">{username}</div>
          <div className="frame-2">
            <img className="uis-favorite" alt="Uis favorite" src="uis-favorite.svg" />
            <div className="text-wrapper-2">{rating}</div>
          </div>
        </div>
        <p className="p">{shortProfile}</p>
        <div className="frame-3">
          <Button className="button-instance" property1="primary" text="VIEW INFO" />
          <img className="memory-message" alt="Memory message" src="memory-message.svg" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCardFrame;