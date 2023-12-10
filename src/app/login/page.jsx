"use client"
import React, { useState } from "react";
import { Button } from "../components/Button";
import  PropertyFormWrapper from "./PropertyFormWrapper";
import "./style.css";
import "../globals.css";
import Menu from "../components/menu";
import Link from "next/link";

export default function LoginPageClient() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
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
            <Menu menuType="openOtherPages" img="line-2.svg" line="line-2.svg" line1="line-2.svg" property1="default" />
            <img className="layer" alt="Layer" src="layer-1.png" />
          </div>
          <div className="frame-2-right">
            Sign up
          </div>
        </div>
            <div className="rectangle-2">
                <div className="group">
                    <div className="overlap">
                        <p className="p">Log In</p>
                       
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group">
                              <a href="google.com" >
                                <Button className="button-instance" 
                                property1="secondary" 
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

                        <PropertyFormWrapper
                        className="prop-form first button-2"
                        property1="form-field-default"
                        text="Email address"
                        onChange={(value) => handleInputChange("email", value)}
                        />

                        <PropertyFormWrapper
                        className="prop-form first button-3"
                        property1="form-field-default"
                        text="Password"
                        onChange={(value) => handleInputChange("password", value)}
                        />
                       <Link href= "../verification"> <Button
                        className={isFormFilled ? "button-instance" : "button-6"}
                        property1="primary"
                        text="LOG IN"
                        disabled={!isFormFilled}
                        /></Link>
                      <div className="frame-3">
                        <div className="remember-me">
                           <div className="rectangle" />
                           <div className="text-wrapper-3">Remember Me ?</div>
                        </div>
                        <div className="text-wrapper-4">Forgot Password</div>
                        </div>
                        <div className="bottom">
                      <div className="frame-b">
                      <img className="line2" alt="Line" src="line-2.svg" />
                            <div className="text-wrapper-2">Dont have an account</div>
                            <img className="line2" alt="Line" src="line-2.svg" />
                      </div>
                      <Link href="signup">
                      <Button 
                        className="btn-sign-up" 
                        property1="secondary" 
                        text="SIGN UP"
                      /></Link>
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
  );
};

