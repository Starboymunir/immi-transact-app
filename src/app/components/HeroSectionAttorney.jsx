import PropTypes from "prop-types";
import React from "react";
import Button from "./Button";
import "../globals.css";
import "./styles/buttons.css";
import "./styles/hero-section.css"
import Menu from "./menu";
import Link from "next/link";
//import img from 'next/img'

export const HeroSectionAttorney = ({ property1, className }) => {
  return (
    <div className="hero-section hero-section-attorney">
      <div className="overlap-group">
        <div className={`rectangle-b ${property1}`}>
          <div className="frame">
            <div className="ellipse" />

            <div className="div" />
          </div>
          <div className="frame-2">
            <div className="frame-2-left">
          <Menu img="line-2.svg" line="line-2.png" line1="line-2.svg" property1="default" />;
            <img
              className="asset"
              alt="Asset"
              src={property1 === "hero-section-attorney" ? "asset-nldpi-1-3.svg" : "asset-nldpi-1-3.svg"}
            />
            </div>
            <div className="frame-2-right">
              Sign up
            </div>
            <div className="frame-3">
              <div className={`text-wrapper property-1-0-${property1}`}>Home</div>
              <Link href="/faq"><div className={`text-wrapper-2 property-1-1-${property1}`}>About Us</div></Link>
              <Link href="/contact"><div className={`text-wrapper-3 property-1-2-${property1}`}>Contact Us</div></Link>
            </div>
            <div className="frame-4 hero-content-attorney">
              <Link href="/login"><Button
                className="instance-node"
                property1="link"
                text="LOG IN"
                textClassName={`${property1 === "hero-section-attorney" && "button-instance"}`}
              /></Link>
              <Link href="/signup"><Button className="instance-node" property1="primary" text="SIGN UP" textClassName="button-instance" /></Link>
            </div>
          </div>
          <div className="hero-content hero-content-attorney">
            <div className={`green-card-made-easy property-1-3-${property1}`}>
              Green card made easy
            </div>
            <p className={`your-ultimate-legal property-1-4-${property1}`}>
              Your ultimate legal platform to connect with seasoned attorneys<wbr></wbr> for your immigration journey
            </p>
            <div className="hero-btn">
              <Button
                className="button-2"
                property1="primary"
                text="TAKE UP AN APPLICATION"
              />
              <Button
                className="eo class-2"
                property1="secondary"
                text="TALK TO A CLIENT"
                textClassName={`${property1 === "hero-section-attorney" && "button-instance"}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};


HeroSectionAttorney.propTypes = {
  property1: PropTypes.oneOf(["hero-section-attorney", "hero-section-client"]),
};
export default HeroSectionAttorney;
