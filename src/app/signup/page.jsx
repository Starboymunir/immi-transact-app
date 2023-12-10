"use client"
import React, { useState } from "react";
import { Button } from "../components/Button";
import  PropertyFormWrapper from "./PropertyFormWrapper";
import "./style.css";
import "../globals.css";
import Menu from "../components/menu";
import Link from "next/link";


export default function SignUpPageClient() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    lastName: "",
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
        <div className="div">
        <div className="frame-2">
          <div className="frame-2-left">
            <Menu menuType="default" img="line-2.svg" line="line-2.svg" line1="line-2.svg" property1="default" />
            <img className="layer" alt="Layer" src="layer-1.png" />
          </div>
          <div className="frame-2-right">
            Sign up
          </div>
        </div>
            <div className="rectangle-2">
                <div className="group">
                    <div className="overlap">
                        <p className="p">Sign up to Apply for<wbr></wbr> green card</p>
                       
                        <div className="overlap-group-wrapper">
                          <div className="overlap-group">
                          <a href="google.com"> 
                                <Button className="button-instance" 
                                property1="primary" 
                                text="CONTINUE WITH GOOGLE"
                                imgSrc="ri-google-fill.svg"
                                imgAlt= "Ri google fill"
                                imgClassName= "ri-google-fill" 
                                /></a>
                            </div>
                        </div>
                        <div className="frame">
                            <img className="line" alt="Line" src="line-2.svg" />
                            <div className="text-wrapper-2">Or</div>
                            <img className="line" alt="Line" src="line-2.svg" />
                        </div>
                        <div className="first">
                            <PropertyFormWrapper
                            className="prop-form design-component-instance-node"
                            property1="form-field-default"
                            text="First name"
                            onChange={(value) => handleInputChange("firstName", value)}
                            />
                            <PropertyFormWrapper
                            className="prop-form button-2"
                            property1="form-field-default"
                            text="Email address"
                            onChange={(value) => handleInputChange("email", value)}
                            />
                        </div>
                        <PropertyFormWrapper
                        className="prop-form first button-3"
                        property1="form-field-default"
                        text="Password"
                        onChange={(value) => handleInputChange("password", value)}
                        />
                        <PropertyFormWrapper
                        className="prop-form first button-4"
                        property1="form-field-default"
                        text="Confirm password"
                        onChange={(value) => handleInputChange("confirmPassword", value)}
                        />
                        <PropertyFormWrapper
                        className="prop-form first button-5"
                        property1="form-field-default"
                        text="Last Name"
                        onChange={(value) => handleInputChange("lastName", value)}
                        />
                        <div className="frame-2">
                        <div className="rectangle" />
                        <p className="text-wrapper-2">I agree to the Immi-Transact User Agreement and Privacy Policy.</p>
                        </div>
                        <Link href= "../dashboard"><Button
                        className={isFormFilled ? "button-instance" : "button-6"}
                        property1="primary"
                        text="CREATE ACCOUNT"
                        disabled={!isFormFilled}
                        /></Link>
                        <div className="frame-3">
                        <a href="google.com"> <div className="text-wrapper-3">Already have an account?</div></a>
                        <Link href="../login"><div className="text-wrapper-4">Log In</div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

