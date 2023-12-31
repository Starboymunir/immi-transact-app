"use client"
import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Header from "../components/header";
import { HomepageFooter } from "./HomepageFooter";
import "./style.css";
import "../globals.css";
import Link from "next/link";
import authService from "../context/AuthContext";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function ClientApplication() {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = authService.onAuthStateChanged((authUser) => {
            setUser(authUser);
        });

        return () => unsubscribe();
    }, []);

    const handleOptionClick = (option) => {
        // Toggle the option in the selectedOptions array
        setSelectedOptions((prevOptions) =>
            prevOptions.includes(option)
                ? prevOptions.filter((selectedOption) => selectedOption !== option)
                : [...prevOptions, option]
        );
    };

    const handleNextClick = async () => {
        if (user) {
            const db = getFirestore();
            const userDocRef = doc(db, "jobs_created", user.email);

            await setDoc(userDocRef, {
                created_at: serverTimestamp(),
                practiceAreas: selectedOptions,
                id: user.email,
                username: user.displayName,
            });

            router.push("/dashboard");
        }
    };

    return (
        <div className="client-application">
            <div className="div-2">

                <Header
                    className="header-instance"
                    img="material-symbols-notifications-outline-2.svg"
                    layer="layer-1-2.png"
                    maskGroup="image.png"
                    materialSymbols="image.svg"
                    memoryMessage="memory-message-2.svg"
                    tablerSettings="tabler-settings-2.svg"
                />
                <div className="application-content">
                    <div className="text-wrapper-5">Select Practice Area(s)</div>

                    <div className="frame-6 my-frame" onClick={() => handleOptionClick("family")}>
                        <div className="frame-7">
                            <img className="img-2" alt="Family" src="family.png" />
                            <div
                                className={`text-wrapper-6 ${selectedOptions.includes("family") ? "selected" : ""}`}
                               
                            >
                                Green Card through Family
                            </div>
                        </div>
                        <div
                            className={`rectangle-wrapper ${selectedOptions.includes("family") ? "selected-rectangle" : ""}`}
                            style={{ backgroundColor: selectedOptions.includes("family") ? "black" : "" }}
                        ></div>
                    </div>
                    <div className="frame-8 my-frame" onClick={() => handleOptionClick("employment")}>
                        <div className="frame-7">
                            <img className="img-2" alt="Family" src="family.png" />
                            <div
                                className={`text-wrapper-6 ${selectedOptions.includes("employment") ? "selected" : ""}`}
                               
                            >
                                Green Card through Employment
                            </div>
                        </div>
                        <div
                            className={`rectangle-wrapper ${selectedOptions.includes("employment") ? "selected-rectangle" : ""}`}
                            style={{ backgroundColor: selectedOptions.includes("employment") ? "black" : "" }}
                        ></div>
                    </div>

                    <div className="frame-9 my-frame"  onClick={() => handleOptionClick("special-immigrant")}>
                        <div className="frame-7">
                            <img className="img-2" alt="Family" src="family.png" />
                            <div
                                className={`text-wrapper-6 ${selectedOptions.includes("special-immigrant") ? "selected" : ""}`}
                               
                            >
                                Green Card as a special immigrant
                            </div>
                        </div>
                        <div
                            className={`rectangle-wrapper ${selectedOptions.includes("special-immigrant") ? "selected-rectangle" : ""}`}
                            style={{ backgroundColor: selectedOptions.includes("special-immigrant") ? "black" : "" }}
                        ></div>
                    </div>

                    <div className="frame-10 my-frame"  onClick={() => handleOptionClick("refugee")}>
                        <div className="frame-7">
                            <img className="img-2" alt="Family" src="family.png" />
                            <div
                                className={`text-wrapper-6 ${selectedOptions.includes("refugee") ? "selected" : ""}`}
                              
                            >
                                Green Card for refugees
                            </div>
                        </div>
                        <div
                            className={`rectangle-wrapper ${selectedOptions.includes("refugee") ? "selected-rectangle" : ""}`}
                            style={{ backgroundColor: selectedOptions.includes("refugee") ? "black" : "" }}
                        ></div>
                    </div>
                    <div className="frame-11 my-frame"  onClick={() => handleOptionClick("trafficking")}>
                    <div className="frame-7">
                            <img className="img-2" alt="Family" src="family.png" />
                            <div
                                className={`text-wrapper-6 ${selectedOptions.includes("trafficking") ? "selected" : ""}`}
                           
                            >
                                Green Card for victims of trafficking
                            </div>
                        </div>
                        <div
                            className={`rectangle-wrapper ${selectedOptions.includes("trafficking") ? "selected-rectangle" : ""}`}
                            style={{ backgroundColor: selectedOptions.includes("trafficking") ? "black" : "" }}
                        ></div>
                    </div>
                    <div className="frame-12  my-frame"  onClick={() => handleOptionClick("abuse")}>
                    <div className="frame-7">
                            <img className="img-2" alt="Family" src="family.png" />
                            <div
                                className={`text-wrapper-6 ${selectedOptions.includes("abuse") ? "selected" : ""}`}
                               
                            >
                                Green Card for victims of abuse
                            </div>
                        </div>
                        <div
                            className={`rectangle-wrapper ${selectedOptions.includes("abuse") ? "selected-rectangle" : ""}`}
                            style={{ backgroundColor: selectedOptions.includes("abuse") ? "black" : "" }}
                        ></div>
                    </div>
                    <div className="frame-13 my-frame"  onClick={() => handleOptionClick("registry")}>
                    <div className="frame-7">
                            <img className="img-2" alt="Family" src="family.png" />
                            <div
                                className={`text-wrapper-6 ${selectedOptions.includes("registry") ? "selected" : ""}`}
                                
                            >
                                Green Card through registry
                            </div>
                        </div>
                        <div
                            className={`rectangle-wrapper ${selectedOptions.includes("registry") ? "selected-rectangle" : ""}`}
                            style={{ backgroundColor: selectedOptions.includes("registry") ? "black" : "" }}
                        ></div>
                    </div>
                    <div className="frame-14 my-frame"  onClick={() => handleOptionClick("others")}>
                    <div className="frame-7">
                            <img className="img-2" alt="Family" src="family.png" />
                            <div
                                className={`text-wrapper-6 ${selectedOptions.includes("others") ? "selected" : ""}`}
                            
                            >
                                Green Card through others
                            </div>
                        </div>
                        <div
                            className={`rectangle-wrapper ${selectedOptions.includes("others") ? "selected-rectangle" : ""}`}
                            style={{ backgroundColor: selectedOptions.includes("others") ? "black" : "" }}
                        ></div>
                    </div>
                    <Link href="../dashboard">                <Button
                        className={`button-3 ${selectedOptions ? "button-3-active" : ""}`}
                        property1="primary"
                        text="NEXT"
                        onClick={handleNextClick}
                    /> </Link>
                </div>



                <HomepageFooter
                    asset="asset-9ldpi-1-2.svg"
                    className="homepage-footer-instance"
                    phCopyright="ph-copyright-2.svg"
                />
            </div>

        </div>
    );
}