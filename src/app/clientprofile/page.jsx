"use client"
import React from "react";
import { Button } from "../components/Button";
import Header from "../components/header";
import "./style.css";
import "../globals.css";
import ReviewCard from "./ReviewCard";
import Link from "next/link";

export default function ClientProfile() {
    return (
        <div className="client-profile">
            <div className="div">
                <div className="group">
                    <Header
                        className="header-instance"
                        img="material-symbols-notifications-outline-2.svg"
                        layer="layer-1-2.png"
                        maskGroup="mask-group-2.png"
                        materialSymbols="material-symbols-search-2.svg"
                        memoryMessage="memory-message-2.svg"
                        tablerSettings="tabler-settings-2.svg"
                    />
                    <div className="frame-29">
                        <div className="frame-3">
                            <div className="ic-baseline-plus-wrapper">

                                <img className="ic-baseline-plus" alt="Ic baseline plus" src="ic-baseline-plus.svg" /> </div>
                            <div className="text-wrapper-2">Abdul-Qudus Agbaje</div>
                        </div>
                        <div className="text-wrapper-3">Illinois, USA</div>
                        <Link href="../EditClientProfile"> <Button property1="primary" text="EDIT PROFILE" /></Link>
                       
                    </div>
                    <div className="frame-4">
                        <div className="text-wrapper-4">Bio</div>
                        <p className="p">

                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu.
                        </p>
                    </div>
                    <div className="frame-5">
                        <div className="text-wrapper-4">Services</div>
                        <div className="frame-6">

                            <Button className="button-instance" property1="secondary-hover" text="GREEN CARD THROUGH EMPLOYMENT" /> <Button className="button-instance" property1="secondary-hover" text="GREEN CARD THROUGH FAMILY" /> <Button className="button-instance" property1="secondary-hover" text="GREEN CARD FOR ASYLUM" /> <Button className="button-instance" property1="secondary-hover" text="GREEN CARD THROUGH REGISTRY" />
                        </div>
                    </div>
                    <div className="text-wrapper-5">Reviews</div>
                    <div className="frame-7">
                        <div className="group-2">
                            <div className="group-3">
                                <div className="text-wrapper-6">Habeeb Munir</div>
                                <div className="frame-8">
                                    <div className="frame-9">
                                        <div>
                                            <img className="frame-16" alt="Frame" src="frame-362-2.svg" />
                                        </div>
                                        <div>
                                            <img className="frame-16" alt="Frame" src="frame-362-2.svg" />
                                        </div>
                                        <div>
                                            <img className="frame-16" alt="Frame" src="frame-362-2.svg" />
                                        </div>
                                        <div>
                                            <img className="frame-16" alt="Frame" src="frame-362-2.svg" />
                                        </div>
                                        <div className="text-wrapper-7">4</div>
                                    </div>
                                    <img className="line-2" alt="Line" src="line-22.svg" />
                                    <div className="text-wrapper-8">2 weeks ago</div>
                                </div>
                            </div>
                            <p className="text-wrapper-9">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu.
                            </p>
                        </div>
                        <div className="group-4">
                            <div className="group-3">
                                <div className="text-wrapper-6">Habeeb Munir</div>
                                <div className="frame-8">
                                    <div className="frame-9">
                                        <div>
                                            <img className="frame-16" alt="Frame" src="frame-362-2.svg" />
                                        </div>
                                        <div>
                                            <img className="frame-16" alt="Frame" src="frame-362-2.svg" />
                                        </div>
                                        <div>
                                            <img className="frame-16" alt="Frame" src="frame-362-2.svg" />
                                        </div>
                                        <div>
                                            <img className="frame-16" alt="Frame" src="frame-362-2.svg" />
                                        </div>
                                        <div className="text-wrapper-7">4</div>
                                    </div>
                                    <img className="line-2" alt="Line" src="line-22-2.svg" />
                                    <div className="text-wrapper-8">2 weeks ago</div>
                                </div>
                            </div>
                            <p className="text-wrapper-9">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            <div className="div-2">
                <Header
                    className="header-instance"
                    img="material-symbols-notifications-outline-2.svg"
                    layer="layer-1-2.png"
                    maskGroup="mask-group-2.png"
                    materialSymbols="material-symbols-search-2.svg"
                    memoryMessage="memory-message-2.svg"
                    tablerSettings="tabler-settings-2.svg"
                />
                <div className="text-wrapper-2">Profile</div>
                <div className="frame-3">
                    <div className="text-wrapper-3">Green Card Choices</div>
                    <div className="frame-4">
                        <Button className="button-instance" property1="secondary-hover" text="GREEN CARD THROUGH EMPLOYMENT" /> <Button className="button-instance" property1="secondary-hover" text="GREEN CARD THROUGH FAMILY" />
                    </div>
                </div>
                <div className="frame-5">
                    <div className="frame-6">
                        <div className="frame-7">
                            <div className="group">
                                <img className="ic-baseline-plus" alt="Ic baseline plus" src="ic-baseline-plus.svg" />
                            </div>
                            <div className="text-wrapper-4">Abdul-Qudus Agbaje</div>
                        </div>
                        <div className="text-wrapper-5">Arizona, USA</div>
                    </div>
                    <Button property1="primary" text="EDIT PROFILE" />
                </div>
                <div className="frame-8">
                    <div className="text-wrapper-3">Bio</div>
                    <p className="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu.
                    </p>
                </div>
                <div className="frame-9">
                    <div className="text-wrapper-6">Reviews</div>
                    <div className="frame-10">
                        <ReviewCard
                            name="Habeeb Munir"
                            location="Arizona, USA"
                            timePosted="2 weeks ago"
                            reviewBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu."
                        />

                        <img className="line-2" alt="Line" src="line-23.svg" />
                        <ReviewCard
                            name="Habeeb Munir"
                            location="Arizona, USA"
                            timePosted="2 weeks ago"
                            reviewBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

