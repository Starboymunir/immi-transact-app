import React from "react";
import { Button } from "./Button";
import "../globals.css";
import Image from 'next/image'
import "./styles/buttons.css";
import "./styles/hero-section.css"
import "../globals.css"

export const NavBar = () => {
  return (
    <div className="frame">
      <Image className="asset" alt="Asset" src="asset-9ldpi-1.svg" />
      <div className="div">
        <div className="text-wrapper">Home</div>
        <div className="text-wrapper">About Us</div>
        <div className="text-wrapper">Contact Us</div>
      </div>
      <div className="div-2">
        <Button className="button-instance" property1="link" text="LOG IN" />
        <Button
          className="button-instance"
          property1="primary"
          text="SIGN UP"
          textClassName="design-component-instance-node"
        />
      </div>
    </div>
  );
};
export default NavBar;
