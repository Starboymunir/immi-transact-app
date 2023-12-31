"use client"
import React from "react";
import { useRouter } from "next/navigation";
import { useParams } from 'next/navigation';
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
  userEmail, // Add userEmail as a prop
}) => {
  const router = useRouter();

  const handleViewInfoClick = () => {
    // Use the useRouter hook to navigate to the new page
    router.push(`/${userEmail}`);
  };

  return (
    <div className="profile-card-frame">
      <div className="profile-mask-div">
        <img className="mask-group" alt="Mask group" src={maskGroup} />
      </div>
      <div className="profile-frame">
        <div className="profile-div">
          <div className="profile-text-wrapper">{username}</div>
          <div className="profile-frame-2">
            <img className="uis-favorite" alt="Uis favorite" src="uis-favorite.svg" />
            <div className="profile-text-wrapper-2">{rating}</div>
          </div>
        </div>
        <p className="profile-p">{shortProfile}</p>
        <div className="profile-frame-3">
          {/* Pass handleViewInfoClick as the onClick handler */}
          <Button
            className="button-instance"
            property1="primary"
            text="VIEW INFO"
            onClick={handleViewInfoClick}
          />
          <img className="memory-message" alt="Memory message" src="memory-message.svg" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCardFrame;
