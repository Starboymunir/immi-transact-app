"use client"
import React from "react";
import Button from "../components/Button";
import Header from "../components/header";
import { HomepageFooter } from "./HomepageFooter";
import ProfileCardFrame from "./ProfileCardFrame";
import "./style.css";
import "../globals.css";
import Link from "next/link";

import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export default function HomepageSignIn() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const db = getFirestore();
            const usersCollection = collection(db, 'User');
            const usersSnapshot = await getDocs(usersCollection);
            const usersData = usersSnapshot.docs.map(doc => doc.data());
            setUsers(usersData);
        };

        fetchUsers();
    }, []);

    return (
        <div className="homepage-sign-in">

            <div className="div-1">
            <Header
                    className="header-instance"
                    img="material-symbols-notifications-outline-2.svg"
                    layer="layer-1-2.png"
                    maskGroup="mask-group-7.png"
                    materialSymbols="material-symbols-search-3.svg"
                    memoryMessage="memory-message-8.svg"
                    tablerSettings="tabler-settings-2.svg"
                />
            
                <div className="text-wrapper-4">Getting Started</div> 
                <p className="for-people-seeking">

                    For people seeking legal services of&nbsp;&nbsp;Attorneys for US permanent residency and citizenship applications.
                </p>
                <Button className="button-4" property1="primary" text="SELECT PRACTICE AREAS" textClassName="button-5" /> <div className="frame-7">
                {users.slice(0, 3).map((user, index) => (
                        <ProfileCardFrame
                            key={index}
                            username={user.username}
                            maskGroup={user.imageUrl}
                            rating={user.rating}
                            shortProfile={user.shortProfile}
                            buttonTextClassName="profile-card-frame-instance"

                            memoryMessage={`memory-message-${index + 3}.svg`}
                            uisFavorite={`uis-favorite-${index + 2}.svg`}
                        />
                    ))}
                </div>
                <div className="frame-8">
                {users.slice(0, 3).map((user, index) => (
                        <ProfileCardFrame
                            key={index}
                            username={user.username}
                            maskGroup={user.imageUrl}
                            rating={user.rating}
                            shortProfile={user.shortProfile}
                            buttonTextClassName="profile-card-frame-instance"

                            memoryMessage={`memory-message-${index + 3}.svg`}
                            uisFavorite={`uis-favorite-${index + 2}.svg`}
                        />
                    ))}
                </div>
                <div className="text-wrapper-5">Top rated clients</div>
                <div className="text-wrapper-6">Clients near you</div>
                <div className="frame-9">
                    <div className="frame-10">
                        <img className="img-2" alt="Material symbols" src="image.svg" />
                        <div className="text-3">Search</div>
                    </div>
                    <img className="img-2" alt="Mi filter" src="mi-filter.svg" />
                </div>
                <div className="text-wrapper-7">View all</div>
                <HomepageFooter
                    asset="asset-9ldpi-1-2.svg"
                    className="homepage-footer-instance"
                    phCopyright="ph-copyright-2.svg"
                />
                 </div>



            <div className="div-2">
                <div className="getting-started">
                    <div className="overlap-group">
                        <div className="text-wrapper-8">Getting Started</div>
                        <p className="for-people-seeking">
                        For people seeking legal services of  Attorneys for US permanent residency and citizenship applications.
                        </p>
                        <img className="lawyers-debate-in" alt="Lawyers debate in" src="Naturalization.png" />
                        <Link href="../attorneyApplication"><Button className="button-4" property1="primary" text="SELECT PRACTICE AREAS" /></Link>
                    </div>
                </div>
                <div className="text-wrapper-9">Top rated clients</div>
                <div className="text-wrapper-10">Clients near you</div>
                <div className="frame-10">
                {users.slice(0, 5).map((user, index) => (
                        <ProfileCardFrame
                            key={index}
                            username={user.username}
                            maskGroup={user.imageUrl}
                            rating={user.rating}
                            shortProfile={user.shortProfile}
                            buttonTextClassName="profile-card-frame-instance"

                            memoryMessage={`memory-message-${index + 3}.svg`}
                            uisFavorite={`uis-favorite-${index + 2}.svg`}
                        />
                    ))}
                </div>
                <div className="frame-11">
                {users.slice(0, 5).map((user, index) => (
                        <ProfileCardFrame
                            key={index}
                            username={user.username}
                            maskGroup={user.imageUrl}
                            rating={user.rating}
                            shortProfile={user.shortProfile}
                            buttonTextClassName="profile-card-frame-instance"

                            memoryMessage={`memory-message-${index + 3}.svg`}
                            uisFavorite={`uis-favorite-${index + 2}.svg`}
                        />
                    ))}
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
