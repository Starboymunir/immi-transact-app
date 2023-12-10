"use client"
import React from "react";
import { Button } from "../components/Button";
import Header from "../components/header";
import { HomepageFooter } from "./HomepageFooter";
import { ProfileCardFrame } from "./ProfileCardFrame";
import "./style.css";
import "../globals.css";
import Link from "next/link";
export default function HomepageSignIn() {
    return (
        <div className="homepage-sign-in">
            <div className="div-2">
                <div className="getting-started">
                    <div className="overlap-group">
                        <div className="text-wrapper-8">Getting Started</div>
                        <p className="for-people-seeking">
                            For people seeking legal services of&nbsp;&nbsp;Attorneys for US permanent residency and citizenship applications.
                        </p>
                        <img className="lawyers-debate-in" alt="Lawyers debate in" src="lawyers-debate-in-front-of-a-judge.png" /> 
                        <Link href = "../clientApplication"><Button className="button-4" property1="primary" text="APPLY FOR GREEN CARD" /></Link>
                    </div>
                </div>
                <div className="text-wrapper-9">Top rated attorneys</div>
                <div className="text-wrapper-10">Attorneys near you</div>
                <div className="frame-10">
                    <ProfileCardFrame
                        buttonTextClassName="profile-card-frame-instance"
                        maskGroup="mask-group-2.png"
                        memoryMessage="memory-message-3.svg"
                        uisFavorite="uis-favorite-2.svg"
                    />
                    <ProfileCardFrame
                        buttonTextClassName="profile-card-frame-instance"
                        maskGroup="mask-group-3.png"
                        memoryMessage="memory-message-4.svg"
                        uisFavorite="uis-favorite-3.svg"
                    />
                    <ProfileCardFrame
                        buttonTextClassName="profile-card-frame-instance"
                        maskGroup="mask-group-4.png"
                        memoryMessage="memory-message-5.svg"
                        uisFavorite="uis-favorite-4.svg"
                    />
                    <ProfileCardFrame
                        buttonTextClassName="profile-card-frame-instance"
                        maskGroup="mask-group-5.png"
                        memoryMessage="memory-message-6.svg"
                        uisFavorite="uis-favorite-5.svg"
                    />
                    <ProfileCardFrame
                        buttonTextClassName="profile-card-frame-instance"
                        maskGroup="mask-group-6.png"
                        memoryMessage="memory-message-7.svg"
                        uisFavorite="uis-favorite-6.svg"
                    />
                </div>
                <div className="frame-11">
                    <ProfileCardFrame
                        buttonTextClassName="profile-card-frame-2"
                        maskGroup="mask-group-8.png"
                        memoryMessage="memory-message-9.svg"
                        uisFavorite="uis-favorite-7.svg"
                    />
                    <ProfileCardFrame
                        buttonTextClassName="profile-card-frame-2"
                        maskGroup="mask-group-9.png"
                        memoryMessage="memory-message-10.svg"
                        uisFavorite="uis-favorite-8.svg"
                    />
                    <ProfileCardFrame
                        buttonTextClassName="profile-card-frame-2"
                        maskGroup="mask-group-10.png"
                        memoryMessage="memory-message-11.svg"
                        uisFavorite="uis-favorite-9.svg"
                    />
                    <ProfileCardFrame
                        buttonTextClassName="profile-card-frame-2"
                        maskGroup="mask-group-11.png"
                        memoryMessage="memory-message-12.svg"
                        uisFavorite="uis-favorite-10.svg"
                    />
                    <ProfileCardFrame
                        buttonTextClassName="profile-card-frame-2"
                        maskGroup="mask-group-12.png"
                        memoryMessage="memory-message-13.svg"
                        uisFavorite="uis-favorite-11.svg"
                    />
                </div>
                <div className="frame-12">
                    <button className="button-5">
                        <img className="img-3" alt="Material symbols" src="material-symbols-search.svg" />
                        <div className="text-3">Search for Attorneys</div>
                    </button>
                    <div className="frame-13">
                        <div className="frame-14">
                            <div className="frame-15">
                                <img className="img-3" alt="Mi filter" src="mi-filter.svg" />
                                <div className="text-wrapper-11">Search by location</div>
                            </div>
                            <img className="img-3" alt="Mingcute down line" src="mingcute-down-line.svg" />
                        </div>
                        <div className="frame-14">
                            <div className="frame-15">
                                <img className="img-3" alt="Mi filter" src="mi-filter.svg" />
                                <div className="text-wrapper-11">Filters</div>
                            </div>
                            <img className="img-3" alt="Mingcute down line" src="mingcute-down-line.svg" />
                        </div>
                    </div>
                </div>
                <div className="text-wrapper-12">View all</div>
                <Header
                    className="header-instance"
                    img="material-symbols-notifications-outline-2.svg"
                    layer="layer-1-2.png"
                    maskGroup="mask-group-7.png"
                    materialSymbols="material-symbols-search-3.svg"
                    memoryMessage="memory-message-8.svg"
                    tablerSettings="tabler-settings-2.svg"
                />
                  <HomepageFooter
                    asset="asset-9ldpi-1-2.svg"
                    className="homepage-footer-instance"
                    phCopyright="ph-copyright-2.svg"
                />
            </div>
        </div>
    );
};
