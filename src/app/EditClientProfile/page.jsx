"use client"
import React, { useState } from "react";
import Button from "../components/Button";
import Header from "../components/header";
import PropertyFormWrapper from "./PropertyFormWrapper";
import authService from "../context/AuthContext";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import "./style.css";
import "../globals.css";

export default function EditClientProfile() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    address: "",
    state: "",
    location: "",
    zipcode: "",
    linkdin: "",
    fullProfile: "",
  });

  const user = authService.user;

  // Function to handle form input changes
  const handleInputChange = (field, value) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [field]: value,
    }));
  };

  // Function to handle form submission
  const handleSaveChanges = async () => {
    try {
      // Construct the updated user data object
      const updatedUserData = {
        username: userData.username,
        email: userData.email,
        phoneNumber: userData.phoneNumber,
        address: userData.address,
        state: userData.state,
        location: userData.location,
        zipcode: userData.zipcode,
        linkedin: userData.linkdin,
        about: userData.fullProfile,
      };

      // Update the user data in Firestore
    
      // ...
      
      // Use the converted email in your Firestore document reference
      const userDocRef = doc(getFirestore(), "User", user.email);
      await updateDoc(userDocRef, updatedUserData);

      console.log("User data updated successfully!");
    } catch (error) {
      console.error("Error updating user data:", error.message);
    }
  };

  return (
    <div className="edit-client-profile">
      <div className="div-2">
        <Header
          className="header-instance"
          img="material-symbols-notifications-outline-2.svg"
          layer="layer-1-2.png"
          maskGroup="mask-group-2.png"
          materialSymbols="image.svg"
          memoryMessage="memory-message-2.svg"
          tablerSettings="tabler-settings-2.svg"
        />
        <div className="text-wrapper-2">Edit Profile</div>
        <div className="overlap-group">
          <img className="fluent-camera-add" alt="Fluent camera add" src="ic-baseline-plus.svg" />
        </div>
        <div className="frame-3">
          <PropertyFormWrapper
            className="prop-form mid button-instance"
            property1="form-field-default"
            text="Username"
            onChange={(value) => handleInputChange("username", value)}
          />
          <PropertyFormWrapper
            className="prop-form mid button-instance"
            property1="form-field-default"
            text="Email"
            onChange={(value) => handleInputChange("email", value)}
          />
          <PropertyFormWrapper
            className="prop-form mid button-instance"
            property1="form-field-default"
            text="Phone Number"
            onChange={(value) => handleInputChange("phoneNumber", value)}
          />
          <PropertyFormWrapper
            className="prop-form mid button-instance"
            property1="form-field-default"
            text="Address"
            onChange={(value) => handleInputChange("address", value)}
          />
          <PropertyFormWrapper
            className="prop-form mid button-instance"
            property1="form-field-default"
            text="State"
            onChange={(value) => handleInputChange("state", value)}
          />
          <PropertyFormWrapper
            className="prop-form mid button-instance"
            property1="form-field-default"
            text="Location"
            onChange={(value) => handleInputChange("location", value)}
          />
          <PropertyFormWrapper
            className="prop-form mid button-instance"
            property1="form-field-default"
            text="Zip Code"
            onChange={(value) => handleInputChange("zipcode", value)}
          />
          <PropertyFormWrapper
            className="prop-form mid button-instance"
            property1="form-field-default"
            text="LinkedIn Profile"
            onChange={(value) => handleInputChange("linkdin", value)}
          />
          <PropertyFormWrapper
            className="prop-form button-instance about"
            property1="form-field-default"
            text="About"
            onChange={(value) => handleInputChange("fullProfile", value)}
          />
          <Button property1="primary" text="SAVE CHANGES" onClick={handleSaveChanges} />
        </div>
      </div>
    </div>
  );
}
