
"use client";
import React, { useState } from "react";
import Button from "../components/Button";
import PropertyFormWrapper from "./PropertyFormWrapper";
import "./style.css";
import "../globals.css";
import Popup from './Popup';
import Menu from "../components/menu";
import Link from "next/link";
import authService from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { useParams } from 'next/navigation';
import { getFirestore, collection,  doc, setDoc  } from 'firebase/firestore'; // Adjust imports
import {firebaseConfig} from '../firebaseConfig';
import { initializeApp } from "firebase/app";



const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default function SignUpPageClient() {
  const { user } = authService;
  const { createUser, signInWithGoogle } = authService;
  const { role } = useParams();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

 
  // State for the popup
  const [showPopup, setShowPopup] = useState(false);


  // Function to handle form input changes
  const handleInputChange = (field, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  // Function to handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validation checks
    const validationErrors = {};

    if (!formValues.email || !/^\S+@\S+\.\S+$/.test(formValues.email)) {
      validationErrors.email = "Invalid email address";
    }

    if (!formValues.password || formValues.password !== formValues.confirmPassword) {
      validationErrors.password = "Passwords do not match";
      validationErrors.confirmPassword = "Passwords do not match";
    }

    // Update the errors state with validation errors
    setErrors(validationErrors);

    // If there are validation errors, stop the submission
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      // Call the signup function from your context
      await createUser(formValues.email, formValues.password);
      const sanitizedEmail = formValues.email.replace(/[.#$/[\]]/g, "_");


      const userDocRef = doc(collection(db, 'User'), formValues.email);
      await setDoc(userDocRef, {
        acceptedJob: [],
        address: "", // Add the current country of the user
        email: formValues.email,
        fullProfile: "",
        id: "",
        imageUrl: "", // Add the profile picture URL if available
        isVerificationSubmitted: false,
        isVerified: false,
        latitude: 0,
        lawfirmName: "",
        licenseId: "",
        linkdln: "",
        loginType:"Client",
        longitude: 0,
        notification: [],
        postalCode: "",
        practiceAreas: [],
        practiseState: "",
        rating: 1,
        shortProfile: "I need a green card",
        username: `${formValues.firstName} ${formValues.lastName}`,
      });

    

      // Show the success popup
      setShowPopup(true);
    } catch (error) {
      console.error('Error during signup:', error.message);
      // Handle error, e.g., show error message to the user
      // TODO: Set an error state or display an error message for signup failure
    }
  };

  // Check if all form fields are filled
  const isFormFilled = Object.values(formValues).every((value) => value.trim() !== "");

  // Function to handle Google signup
  const handleGoogleSignUp = async () => {
    try {
      await signInWithGoogle();
      console.log("Google signup successful!");
      // Add any redirection logic or further actions after successful Google signup
    } catch (error) {
      console.error('Error during Google signup:', error.message);
      // Handle error, e.g., show error message to the user
      // TODO: Set an error state or display an error message for Google signup failure
      return;
    }
  };

  return (
    <div className="sign-up-page-client">
      <div className="div">
        <div className="frame-2">
          <div className="frame-2-left">
            <Menu
              menuType="default"
              img="line-2.svg"
              line="line-2.svg"
              line1="line-2.svg"
              property1="default"
            />
            <img className="layer" alt="Layer" src="layer-1.png" />
          </div>
          <div className="frame-2-right">Sign up</div>
        </div>
        <div className="rectangle-7">
          <div className="group">
            <form onSubmit={handleFormSubmit}>
              <div className="overlap">
                <p className="p">Sign up to Apply for<wbr></wbr> green card</p>

                <div className="overlap-group-wrapper">
                  <div className="overlap-group">
                    <Button
                      className="button-instance"
                      property1="primary"
                      text="CONTINUE WITH GOOGLE"
                      imgSrc="ri-google-fill.svg"
                      imgAlt="Ri google fill"
                      imgClassName="ri-google-fill"
                      onClick={handleGoogleSignUp} // Handle Google signup on button click
                    />
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
                    text="Last Name"
                    onChange={(value) => handleInputChange("lastName", value)}
                  />
                </div>
                <PropertyFormWrapper
                  className={`prop-form first button-5 ${errors.email ? "error" : ""}`}
                  property1="form-field-default"
                  text="Email address"
                  onChange={(value) => handleInputChange("email", value)}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
                <PropertyFormWrapper
                  className={`prop-form first button-3 ${errors.password ? "error" : ""}`}
                  property1="password"
                  text="Password"
                  onChange={(value) => handleInputChange("password", value)}
                />
                {errors.password && <span className="error-message">{errors.password}</span>}

                <PropertyFormWrapper
                  className={`prop-form first button-4 ${errors.confirmPassword ? "error" : ""}`}
                  property1="password"
                  text="Confirm password"
                  onChange={(value) => handleInputChange("confirmPassword", value)}
                />


                <div className="frame-2">
                <input className="rectangle" type="checkbox" />
                  <p className="text-wrapper-2">
                    I agree to the Immi-Transact User Agreement and Privacy Policy.
                  </p>
                </div>
                <Button
                  className={isFormFilled ? "button-instance" : "button-6"}
                  property1="primary"
                  text="CREATE ACCOUNT"
                  disabled={!isFormFilled}
                  type="submit"
                />
              </div>
            </form>
            <div className="frame-3">

                <div className="text-wrapper-3">Already have an account?</div>
              <Link href="../login">
                <div className="text-wrapper-z">Log In</div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render the popup */}
      {showPopup && (
        <Popup>
          <div className="email-verification">
            <div className="frame">
              <div className="frame-wrapper">
                <div className="frame">
                  <img className="asset" alt="Asset" src="asset-9ldpi-1.svg" />
                  <div className="text-wrapper">Verify Email</div>
                </div>
              </div>
              <div className="div">
                <p className="par">
                  A mail has been sent to the administrative email address you submitted. Check your email inbox and click the
                  reset link provided.
                </p>
                <div className="text-wrapper-2">Didnt receive an email?</div>
                <div className="div-wrapper">
                  <p className="text-wrapper-3">Check email for verification link</p>
                </div>
                <Link href="dashboard">
                <Button
                  className="button-instance-2"
                  property1="primary"
                  text="DONE"
                  textClassName="design-component-instance-node"
                />
                </Link>
              </div>
            </div>
          </div>
        </Popup>
      )}
    </div>
  );
}
