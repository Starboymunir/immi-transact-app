"use client"
import React from "react";
import { Button } from "../components/Button";
import Header from "../components/header";
import { HomepageFooter } from "./HomepageFooter";
import { ProfileCardFrame } from "./ProfileCardFrame";
import "./style.css";

export default function AttorneyProfile() {
    return (
        <div className="attorney-profile">

            <div className="div-1">
        
            <Header
                    className="header-instance"
                    img="material-symbols-notifications-outline-2.svg"
                    layer="layer-1-2.png"
                    maskGroup="image.png"
                    materialSymbols="material-symbols-search-2.svg"
                    memoryMessage="memory-message-2.svg"
                    tablerSettings="tabler-settings-2.svg"
                />
                <img className="material-symbols" alt="Material symbols" src="material-symbols-search.svg" /> <div className="frame-7">
                    <ProfileCardFrame
                        buttonTextClassName="profile-card-frame-instance"
                        maskGroup="image.png"
                        memoryMessage="memory-message.svg"
                        text="Agbaje Ade"
                        text1="4.8"
                        uisFavorite="uis-favorite.svg"
                    />
                    <ProfileCardFrame
                        buttonTextClassName="profile-card-frame-instance"
                        maskGroup="mask-group.png"
                        memoryMessage="memory-message.svg"
                        text="Agbaje Ade"
                        text1="4.8"
                        uisFavorite="uis-favorite.svg"
                    />
                    <ProfileCardFrame
                        buttonTextClassName="profile-card-frame-instance"
                        maskGroup="mask-group.png"
                        memoryMessage="memory-message.svg"
                        text="Agbaje Ade"
                        text1="4.8"
                        uisFavorite="uis-favorite.svg"
                    />
                    <ProfileCardFrame
                        buttonTextClassName="profile-card-frame-instance"
                        maskGroup="mask-group-4.png"
                        memoryMessage="memory-message-5.svg"
                        text="Agbaje Ade"
                        text1="4.8"
                        uisFavorite="uis-favorite-5.svg"
                    />
                    <ProfileCardFrame
                        buttonTextClassName="profile-card-frame-instance"
                        maskGroup="mask-group-5.png"
                        memoryMessage="memory-message-6.svg"
                        text="Agbaje Ade"
                        text1="4.8"
                        uisFavorite="uis-favorite-6.svg"
                    />
                </div>
                <p className="text-wrapper-5">You may also be interested in</p>
                <Button className="button-4" property1="secondary" text="MORE REVIEWS" />
                <img className="rectangle" alt="Rectangle" src="pexels-daniel-xavier-1239291.jpg" />
                <div className="frame-8">
                    <div className="text-wrapper-6">Ade Isa</div>
                    <div className="group">
                        <div className="frame-9">
                            <img className="img-2" alt="Ic round star rate" src="ic-round-star-rate.svg" />
                            <div className="text-wrapper-7">4.5</div>
                            <div className="text-wrapper-2">(2 reviews)</div>
                        </div>
                    </div>
                </div>
                <div className="frame-10">
                    <Button className="button-5" property1="primary" text="CONTACT" />
                    <img className="material-symbols-2" alt="Material symbols" src="material-symbols-favorite-outline.svg" /> </div>
                <div className="text-wrapper-8">Illinois, USA</div>
                <p className="text-wrapper-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu.
                </p>
                <div className="frame-11">
                    <Button className="button-6" property1="secondary-hover" text="GREEN CARD THROUGH EMPLOYMENT" /> <Button className="button-7" property1="secondary-hover" text="GREEN CARD THROUGH FAMILY" />
                </div>
                <div className="text-wrapper-10">Reviews</div>
                <div className="group-2">
                    <div className="group-3">
                        <div className="text-wrapper-11">Habeeb Munir</div>
                        <div className="frame-12">
                            <div className="frame-13">
                                <img className="frame-14" alt="Frame" src="frame-362.svg" />
                                <div className="text-wrapper-12">5</div>
                            </div>
                            <img className="line-2" alt="Line" src="line-22.svg" />
                            <div className="text-wrapper-13">1 week ago</div>
                        </div>
                    </div>
                    <p className="text-wrapper-14">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis placerat arcu.
                    </p>
                </div>
            </div>


            <div className="div-2">
                <HomepageFooter
                    asset="asset-9ldpi-1-2.svg"
                    className="homepage-footer-instance"
                    phCopyright="ph-copyright-2.svg"
                />
                <p className="text-wrapper-8">Other Attorneys you may be interested in</p>
                <p className="text-wrapper-9">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis
                    placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque,
                    posuere quis placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget

                    neque, posuere quis placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis
                    eget eget neque, posuere quis placerat arcu.
                </p>
                <div className="frame-10">
                    <ProfileCardFrame
                        buttonTextClassName="profile-card-frame-instance"
                        maskGroup="mask-group-5.png"
                        memoryMessage="memory-message-6.svg"
                        uisFavorite="uis-favorite-5.svg"
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
                        maskGroup="mask-group-2.png"
                        memoryMessage="memory-message-3.svg"
                        uisFavorite="uis-favorite-2.svg"
                    />
                    <ProfileCardFrame
                        buttonTextClassName="profile-card-frame-instance"
                        maskGroup="mask-group-6.png"
                        memoryMessage="memory-message-7.svg"
                        uisFavorite="uis-favorite-6.svg"
                    />
                </div>
                <Header
                    className="header-instance"
                    img="material-symbols-notifications-outline-2.svg"
                    layer="layer-1-2.png"
                    maskGroup="mask-group-7.png"
                    materialSymbols="material-symbols-search-2.svg"
                    memoryMessage="memory-message-8.svg"
                    tablerSettings="tabler-settings-2.svg"
                />
                <img className="rectangle" alt="Rectangle" src="pexels-daniel-xavier-1239291.jpg" />
                <div className="text-wrapper-10">Arizona, USA</div>
                <div className="frame-11">
                    <div className="text-wrapper-11">Habeeb Munir</div>
                    <div className="group">
                        <img className="ic-round-star-rate" alt="Ic round star rate" src="ic-round-star-rate.svg" />
                        <div className="text-wrapper-12">4.5</div>
                        <div className="text-wrapper-13">(12 reviews)</div>
                    </div>
                </div>
                <div className="frame-12">
                    <Button className="button-4" property1="primary" text="CONTACT" />
                    <img className="material-symbols-2" alt="Material symbols" src="material-symbols-favorite-outline.svg" />
                </div>
                <div className="text-wrapper-14">Reviews</div>
                <Button className="button-5" property1="secondary" text="MORE REVIEWS" />
                <div className="frame-13">
                    <Button className="button-6" property1="secondary-hover" text="GREEN CARD FOR ASYLUM" />
                    <Button className="button-6" property1="secondary-hover" text="GREEN CARD THROUGH EMPLOYMENT" />
                    <Button className="button-6" property1="secondary-hover" text="GREEN CARD THROUGH FAMILY" />
                    <Button className="button-6" property1="secondary-hover" text="GREEN CARD THROUGH REGISTRY" />
                </div>
                <div className="group-2">
                    <p className="text-wrapper-15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis
                        placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque,
                        posuere quis placerat arcu.
                    </p>
                    <div className="group-3">
                        <img className="ellipse" alt="Ellipse" src="ellipse-9.svg" />
                        <div className="group-4">
                            <div className="text-wrapper-16">Habeeb Munir</div>
                            <div className="text-wrapper-17">Arizona, USA</div>
                            <div className="frame-14">
                                <div className="frame-15">
                                    <img className="frame-16" alt="Frame" src="frame-362.svg" />
                                    <div className="text-wrapper-18">4</div>
                                </div>
                                <img className="line" alt="Line" src="line-22.svg" />
                                <div className="text-wrapper-19">2 weeks ago</div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="line-2" alt="Line" src="line-23.svg" />
                <div className="group-5">
                    <p className="text-wrapper-15">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque, posuere quis
                        placerat arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At eget iaculis eget eget neque,
                        posuere quis placerat arcu.
                    </p>
                    <div className="group-3">
                        <img className="ellipse" alt="Ellipse" src="image.svg" />
                        <div className="group-4">
                            <div className="text-wrapper-16">Habeeb Munir</div>
                            <div className="text-wrapper-17">Arizona, USA</div>
                            <div className="frame-14">
                                <div className="frame-15">
                                    <img className="frame-16" alt="Frame" src="frame-362-2.svg" />
                                    <div className="text-wrapper-18">4</div>
                                </div>
                                <img className="line" alt="Line" src="line-22-2.svg" />
                                <div className="text-wrapper-19">2 weeks ago</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

