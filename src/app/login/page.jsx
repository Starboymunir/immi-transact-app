"use client"
// LoginPageClient.js

import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import PropertyFormWrapper from "./PropertyFormWrapper";
import "./style.css";
import "../globals.css";
import Menu from "../components/menu";
import Link from "next/link";
import Popup from './Popup';
import authService from "../context/AuthContext";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useRouter } from "next/navigation";

export default function LoginPageClient() {
  const { loginUser, resetPassword } = authService;
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [popupOpen, setPopupOpen] = useState(false);
  const [successPopupOpen, setSuccessPopupOpen] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    login: "",
  });

  const handleInputChange = (field, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (!formValues.email || !/^\S+@\S+\.\S+$/.test(formValues.email)) {
      validationErrors.email = "Invalid email address";
    }

    if (!formValues.password) {
      validationErrors.password = "Password is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      await loginUser(formValues.email, formValues.password);

      // Move user redirection logic here
      const db = getFirestore();
      const usersCollection = collection(db, 'User');
      const usersSnapshot = await getDocs(usersCollection);
      const usersData = usersSnapshot.docs.map(doc => doc.data());
     

      const userEmail = formValues.email.toLowerCase();
      const currentUser = usersData?.find(user => user?.email?.toLowerCase() === userEmail);

      const dashboardPage = currentUser?.loginType == 'Client' ? '/dashboard' : '/dashboard-attorney';

      router.push(dashboardPage);
    } catch (err) {
      console.error(err);
      setErrors({ login: "Invalid email or password" });
    }
  };
  const handleForgotPassword = () => {
    setPopupOpen(true);
  };

  const handleResetPassword = async () => {
    try {
      await resetPassword(formValues.email);
      console.log("Password reset email sent successfully");
      setSuccessPopupOpen(true);
    } catch (error) {
      console.error("Error sending password reset email:", error.message);
    } finally {
      setPopupOpen(false);
    }
  };

  const handleCloseSuccessPopup = () => {
    setSuccessPopupOpen(false);
  };

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
            Log In
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
                      imgAlt="Ri google fill"
                      imgClassName="ri-google-fill"
                    /></a>
                </div>
              </div>
              <div className="frame">
                <img className="line" alt="Line" src="line-2.svg" />
                <div className="text-wrapper-2">Or</div>
                <img className="line" alt="Line" src="line-2.svg" />
              </div>

              <form onSubmit={handleFormSubmit}>
                <PropertyFormWrapper
                  className={`prop-form first  ${errors.email ? "error" : ""}`}
                  property1="form-field-default"
                  text="Email address"
                  onChange={(value) => handleInputChange("email", value)}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
                <PropertyFormWrapper
                  className={`prop-form first button-3 ${errors.password ? "error" : ""}`}
                  property1="password"
                  text="Password"
                  onChange={(value) => handleInputChange("password", value)}
                />
                {errors.password && <span className="error-message">{errors.password}</span>}

                {errors.login && <p className="error-message">{errors.login}</p>}
                <Link href="../verification">
                  <Button
                    className={isFormFilled ? "button-instance" : "button-6"}
                    property1="primary"
                    text="LOG IN"
                    disabled={!isFormFilled}
                    onClick={handleFormSubmit}
                  />
                </Link>
              </form>

              <div className="frame-3">
                <div className="remember-me">
                 
                    <input className="rectangle" type="checkbox" />
                
                  <div className="text-wrapper-3" >Remember Me ?</div>
                </div>
                <div className="text-wrapper-40" onClick={handleForgotPassword}>Forgot Password</div>
              </div>
              <div className="bottom">
                <div className="frame-b">
                  <img className="line2" alt="Line" src="line-2.svg" />
                  <div className="text-wrapper-2">Dont have an account</div>
                  <img className="line2" alt="Line" src="line-2.svg" />
                </div>
                <Link href="joinpage">
                  <Button
                    className="btn-sign-up"
                    property1="secondary"
                    text="SIGN UP"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup for Forgot Password */}
      <Popup isOpen={popupOpen}>
        <div className="forget-password">
          <div className="frame-222">
          <div className="frame-wrapper-22">
              <div className="div-22">
                <img className="asset" alt="Asset" src="asset-9ldpi-1.svg" />
                <div className="text-wrapper">Reset Account Password</div>
              </div>
            </div>
            
            <div className="frame-22">
              <input
                className="button-22"
                type="text"
                placeholder="Enter your email"
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
               <Button className="button-instance-2" property1="primary" text="RESET PASSWORD" onClick={handleResetPassword} />
            <div className="frame-33">
              <img className="basil-unlock-outline" alt="Basil unlock outline" src="basil-unlock-outline.svg" />
              <span className="parag">Enter your email address to receive an email to reset your password</span>
            </div>
            <div className="text-wrapper-33">Enter E-mail</div>
            </div>
           
          </div>
        </div>
      </Popup>

      {/* Popup for Success Message */}
      <Popup isOpen={successPopupOpen}>
         <div className="div-bb">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cd850baaa9bf40c2b6723dc4a4c188a2b6bcf98662e818dc00e94f4e543052a?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
          className="img"
        />
        <div className="div-2">Reset Account Password</div>
        <div className="div-3">
          <div className="div-4">Check email for reset link </div>
          <div className="div-5">
            A mail has been sent to the administrative email address you
            submitted. Check your email inbox and click the reset link provided.{" "}
          </div>
          <div className="div-6">Didn’t receive an email?</div>
        </div>
      </div>
      </Popup>
    </div>
  );
};
