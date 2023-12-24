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
    if (selectedOptions.includes(option)) {
      // If the clicked option is already selected, unselect it
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((selectedOption) => selectedOption !== option)
      );
    } else {
      // Otherwise, select the clicked option
      setSelectedOptions((prevOptions) => [...prevOptions, option]);
    }
  };

  const handleNextClick = async () => {
    if (user) {
      const db = getFirestore();
      const userDocRef = doc(db, "jobs_created", user.email);

      // Set the document data in the jobs_created collection
      await setDoc(userDocRef, {
        created_at: serverTimestamp(),
        green_cards: selectedOptions,
        id: user.email,
        username: user.displayName,
      });

      // Redirect to the dashboard or another page
      // You can customize the route based on your application flow
      // For now, redirecting to the dashboard
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
                        <div className="text-wrapper-5">Apply for green card</div>
                <div className="frame-6 my-frame">
                    <div className="frame-7" onClick={() => handleOptionClick("family", "black")}>
                        <img className="img-2" alt="Family" src="family.png" />
                        <div
                            className={`text-wrapper-6 ${selectedOptions === "family" ? "selected" : ""}`}
                            style={{ color: selectedOptions["family"] }}
                        >
                            Green Card through Family
                        </div>
                    </div>
                    <div
                        className={`rectangle-wrapper ${selectedOptions === "family" ? "selected-rectangle" : ""
                            }`}
                    >
                        <div className="rectangle" />
                    </div>
                </div>
                <div className="frame-8 my-frame">
                    <div className="frame-7" onClick={() => handleOptionClick("employment", "black")}>
                        <img className="img-2" alt="Family" src="family.png" />
                        <div
                            className={`text-wrapper-6 ${selectedOptions === "employment" ? "selected" : ""}`}
                            style={{ color: selectedOptions["family"] }}
                        >
                            Green Card through Employment
                        </div>
                    </div>
                    <div
                        className={`rectangle-wrapper ${selectedOptions === "employment" ? "selected-rectangle" : ""
                            }`}
                    >
                        <div className="rectangle" />
                    </div>
                </div>
                <div className="frame-9 my-frame">
                    <div className="frame-7" onClick={() => handleOptionClick("special-immigrant", "black")}>
                        <img className="img-2" alt="Family" src="family.png" />
                        <div
                            className={`text-wrapper-6 ${selectedOptions === "special-immigrant" ? "selected" : ""}`}
                            style={{ color: selectedOptions["family"] }}
                        >
                            Green Card through Special Immigrant
                        </div>
                    </div>
                    <div
                        className={`rectangle-wrapper ${selectedOptions === "special-immigrant" ? "selected-rectangle" : ""
                            }`}
                    >
                        <div className="rectangle" />
                    </div>
                </div>
                <div className="frame-10 my-frame">
                    <div className="frame-7" onClick={() => handleOptionClick("refugee", "black")}>
                        <img className="img-2" alt="Family" src="family.png" />
                        <div
                            className={`text-wrapper-6 ${selectedOptions === "refugee" ? "selected" : ""}`}
                            style={{ color: selectedOptions["family"] }}
                        >
                            Green Card through Refugee or Asylee State
                        </div>
                    </div>
                    <div
                        className={`rectangle-wrapper ${selectedOptions === "refugee" ? "selected-rectangle" : ""
                            }`}
                    >
                        <div className="rectangle" />
                    </div>
                </div>
                <div className="frame-11 my-frame">
                        <div className="frame-7" onClick={() => handleOptionClick("trafficking")}>
                            <img className="img-2" alt="Family" src="family.png" />
                            <div className={`text-wrapper-6 ${selectedOptions === "trafficking" ? "selected" : ""}`}>
                                Green Card for Human Trafficking and Crime Victims
                            </div>
        
                       
                    </div>
                    <div
                            className={`rectangle-wrapper ${selectedOptions === "trafficking" ? "selected-rectangle" : ""
                                }`}
                        >
                            <div className="rectangle" />
                        </div>
                </div>
                <div className="frame-12  my-frame">
                    <div className="frame-7 " onClick={() => handleOptionClick("abuse", "black")}>
                        <img className="img-2" alt="Family" src="family.png" />
                        <div
                            className={`text-wrapper-6 ${selectedOptions === "abuse" ? "selected" : ""}`}
                            style={{ color: selectedOptions["family"] }}
                        >
                            Green Card for Victims of Abuse
                        </div>
                    </div>
                    <div
                        className={`rectangle-wrapper ${selectedOptions === "abuse" ? "selected-rectangle" : ""
                            }`}
                    >
                        <div className="rectangle" />
                    </div>
                </div>
                <div className="frame-13 my-frame">
                    <div className="frame-7" onClick={() => handleOptionClick("registry", "black")}>
                        <img className="img-2" alt="Family" src="family.png" />
                        <div
                            className={`text-wrapper-6 ${selectedOptions === "registry" ? "selected" : ""}`}
                            style={{ color: selectedOptions["family"] }}
                        >
                            Green Card through Registry
                        </div>
                    </div>
                    <div
                        className={`rectangle-wrapper ${selectedOptions === "registry" ? "selected-rectangle" : ""
                            }`}
                    >
                        <div className="rectangle" />
                    </div>
                </div>
                <div className="frame-14 my-frame">
                    <div className="frame-7" onClick={() => handleOptionClick("others", "black")}>
                        <img className="img-2" alt="Family" src="family.png" />
                        <div
                            className={`text-wrapper-6 ${selectedOptions === "others" ? "selected" : ""}`}
                            style={{ color: selectedOptions["family"] }}
                        >
                            Green Card through Other Categories
                        </div>
                    </div>
                    <div
                        className={`rectangle-wrapper ${selectedOptions === "others" ? "selected-rectangle" : ""
                            }`}
                    >
                        <div className="rectangle" />
                    </div>
                </div>
                <Link href= "../dashboard">                <Button
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