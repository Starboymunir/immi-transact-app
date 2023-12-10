"use client"
import React from "react";
import { Button } from "../components/Button";
import Header from "../components/header";
import PropertyFormWrapper from "./PropertyFormWrapper";
import "./style.css";

export default function EditClientProfile () {
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
                    <img className="fluent-camera-add" alt="Fluent camera add" src="ic-baseline-plus.svg" /> </div>
                <div className="frame-3">
                    <PropertyFormWrapper className=" prop-form mid button-instance" property1="form-field-default" text="Abdul-Qudus Agbaje" />
                    <PropertyFormWrapper className="prop-form mid button-instance" property1="form-field-default" text="agbajeabdulqudus@gmail.com" /> 
                    <PropertyFormWrapper className="prop-form mid button-instance" property1="form-field-default" text="Phone Number" />
                    <PropertyFormWrapper className="prop-form mid button-instance" property1="form-field-default" text="USA" />
                    <PropertyFormWrapper className="prop-form mid button-instance" property1="form-field-default" text="Arizona" /> 
                    <PropertyFormWrapper className="prop-form mid button-instance" property1="form-field-default" text="Address" /> 
                    <PropertyFormWrapper className="prop-form mid button-instance" property1="form-field-default" text="Zip Code" /> 
                    <PropertyFormWrapper className="prop-form mid button-instance" property1="form-field-default" text="LinkedIn Profile" /> 
                    <PropertyFormWrapper
                        className="prop-form button-instance about"
                        property1="form-field-default"
                        text={
                            <>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuer <br />

                                At eget iaculis eget eget neque, posuer. Lorem ipsum dolor sit amet, consectetur adipiscing elit <br />

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, ipsum <br />
                                At eget iaculis eget eget neque, posuer. Lorem ipsum dolor sit amet, consectetur adipiscing.
                            </>
                        }
                        textClassName="design-component-instance-node"
                    />
                    <Button property1="primary" text="SAVE CHANGES" />
                </div>
            </div>
        </div>
    );
};
