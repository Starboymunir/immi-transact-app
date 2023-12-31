"use client"
import React, { useState } from "react";
import Button from "../components/Button";
import { Group } from "../components/Group";
import { PropertyDefaultWrapper } from "../components/PropertyDefaultWrapper";
import "../globals.css";
import "../components/styles/joinpage.css";
import Menu from "../components/menu";
import Link from "next/link";
import { useRouter } from "next/navigation";

const JoinPage = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);

  // Function to handle the selection of client or attorney
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Function to handle the creation of an account
  const handleCreateAccount = () => {
    if (selectedOption) {
      // Determine the signup page based on the selected option
      const signupPage = selectedOption === "default-cli-card" ? "/signup" : "/signup_attorney";
      
      // Navigate to the appropriate signup page
      router.push(signupPage);
    }
  };

  return (
    <div className={`join-page ${selectedOption ? "selected" : ""}`}>
      <div className="div-2">
        <div className="frame-2">
          <div className="frame-2-left">
            <Menu menuType="default" img="line-2.svg" line="line-2.svg" line1="line-2.svg" property1="default" />
            <img className="layer" alt="Layer" src="layer-1.png" />
          </div>
          <div className="frame-2-right">Sign up</div>
        </div>

        <div className="rectangle-3">
          <div className="overlap">
            <div className="group-2">
              <span className="text-wrapper-2">Join as a client or attorney</span>
              <div className="group-card">
                <Group
                  className="group-7467"
                  faceAgent="face-agent.svg"
                  property1="default-cli-card"
                  onSelect={() => handleOptionSelect("default-cli-card")}
                  selected={selectedOption === "default-cli-card"}
                />
                <PropertyDefaultWrapper
                  className="group-7468"
                  layersEdit="layers-edit.svg"
                  property1="default-att-card"
                  onSelect={() => handleOptionSelect("default-att-card")}
                  selected={selectedOption === "default-att-card"}
                />
              </div>
              <Button
                className={selectedOption ? "" : "button-instance"}
                property1={selectedOption ? "primary" : "secondary"}
                text="CREATE ACCOUNT"
                textClassName="design-component-instance-node"
                disabled={!selectedOption}
                onClick={handleCreateAccount}
              />
              <div className="frame">
                <div className="text-wrapper-3">Already have an account?</div>
                <Link href="../login">
                  <div className="text-wrapper-4">Log In</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
