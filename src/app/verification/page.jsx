"use client"
import React, { useState } from "react";
import { Button } from "../components/Button";
import Header from "../components/header";
import { HomepageFooter } from "./HomepageFooter";
import  PropertyFormWrapper from "./PropertyFormWrapper";
import "./style.css";
import "../globals.css";
import Link from "next/link";

export default function SignUpPageClient() {
  const [formValues, setFormValues] = useState({
    email: "",
    resident: "",
    address: "",
    zipcode: "",
    linkedin: "",
    message: "",
  });

  // Function to handle form input changes
  const handleInputChange = (field, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  }

  // Check if all form fields are filled
  const isFormFilled = Object.values(formValues).every((value) => value.trim() !== "");

  return (
    <div className="sign-up-page-client">
       <Header
                    className="header"
                    img="material-symbols-notifications-outline-2.svg"
                    layer="layer-1-2.png"
                    maskGroup="image.png"
                    materialSymbols="image.svg"
                    memoryMessage="memory-message-2.svg"
                    tablerSettings="tabler-settings-2.svg"
                />
        <div className="first-div">
        
         <p className="p">Verification</p>
            <div className="rectangle-2">
                <div className="group">
                    <div className="overlap">

                        <PropertyFormWrapper
                        className="prop-form first mid button-3"
                        property1="form-field-default"
                        text="Email"
                        onChange={(value) => handleInputChange("email", value)}
                        />
                         <PropertyFormWrapper
                        className="prop-form first mid button-3"
                        property1="form-field-default"
                        text="Resident State"
                        onChange={(value) => handleInputChange("resident", value)}
                        />
                         <PropertyFormWrapper
                        className="prop-form first mid button-3"
                        property1="form-field-default"
                        text="Address"
                        onChange={(value) => handleInputChange("address", value)}
                        />
                         <PropertyFormWrapper
                        className="prop-form first mid button-3"
                        property1="form-field-default"
                        text="Zip Code"
                        onChange={(value) => handleInputChange("zipcode", value)}
                        />
                        <PropertyFormWrapper
                        className="prop-form first mid button-4"
                        property1="form-field-default"
                        text="LinkedIn Profile"
                        onChange={(value) => handleInputChange("linkedin", value)}
                        />
                        <PropertyFormWrapper
                        className="prop-form first button-5"
                        property1="form-field-default"
                        text="Short Profile/Message"
                        onChange={(value) => handleInputChange("message", value)}
                        />
                        <Link href= "../dashboard">
                        <Button
                        className={isFormFilled ? "button-instance" : "button-6"}
                        property1="primary"
                        text="CREATE ACCOUNT"
                        disabled={!isFormFilled}
                        /></Link>
                    </div>
                </div>
            </div>
        </div>
         <HomepageFooter
                    asset="asset-9ldpi-1-2.svg"
                    className="homepage-footer-instance"
                    phCopyright="ph-copyright-2.svg"
                />
        
    </div>
  );
};