"use client"
import React from "react";
import { Button } from "../components/Button";
import "./style.css";
import "../globals.css";

export const HomepageFooter = () => {
    return (
        <div className="homepage-footer">
            <div className="left">
                <img className="asset" alt="Asset" src="asset-9ldpi-1.svg" />
            </div>
            <div className="right">
                <div className="frame">
                    <button className="div">
                        <div className="text-wrapper">Email address</div>
                    </button>
                    <Button
                        className="button-instance"
                        property1="primary"
                        text="SUBSCRIBE FOR UPDATES"
                        textClassName="design-component-instance-node"
                    />
                </div>
                <span className="p">
                    Immi-Transact is not a law firm and does not provide legal advice. We connect<br></br>
                     individuals with licensed immigration attorneys for legal consultations and <br></br>representation.
                </span>
                <div className="frame-2">
                    <div className="text-wrapper-2">TERMS OF SERVICE</div>
                    <div className="text-wrapper-2">SECURITY &amp; PRIVACY</div>
                    <div className="text-wrapper-2">FAQS</div>
                    <div className="text-wrapper-2">CONTACT US</div>
                </div>
                <div className="frame-3">
                    <img className="ph-copyright" alt="Ph copyright" src="ph-copyright.svg" />
                    <p className="text-wrapper-3">Immi-Transact 2023. All rights reserved</p>
                </div>
            </div>
        </div>
    );
};
export default HomepageFooter;
