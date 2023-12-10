
"use client"
import Header from "../components/header";
import { HomepageFooter } from "./HomepageFooter";
import "./style.css";
import "../globals.css";

export default function Faq (){
    return (
        <div className="FAQ">
            <Header
                    className="header-instance"
                    img="material-symbols-notifications-outline-2.svg"
                    layer="layer-1-2.png"
                    maskGroup="image.png"
                    materialSymbols="material-symbols-search-2.svg"
                    memoryMessage="memory-message-2.svg"
                    tablerSettings="tabler-settings-2.svg"
                />
            <div className="div-2">
                <div className="text-wrapper-5">FAQs</div>
                <img className="line" alt="Line" src="line-26.svg" />
                <button className="button-3">
                    <img className="material-symbols-2" alt="Material symbols" src="image.svg" />
                    <div className="text-3">Search FAQS</div>
                </button>
                <div className="frame-6">
                    <div className="text-wrapper-9">What is Immi-Transact?</div>
                    <div className="text-wrapper-10">Is Immi-Transact Safe?</div>
                    <div className="text-wrapper-10">How does it work?</div>
                    <p className="text-wrapper-11">How much fee does Immi-Transact Charge?</p>
                    <p className="text-wrapper-11">Can I request a personal attorney?</p>
                    <p className="text-wrapper-11">Can I contact a client outside the website?</p>
                </div>
                <div className="frame-7">
                    <div className="frame-8">
                        <div className="text-wrapper-12">What is Immi-Transact?</div>
                        <p className="text-wrapper-14">
                            Immi-Transact seeks to create an all-round digital platform where potential immigrants connect with trusted attorneys to help process their green cards.
                        </p>
                    </div>
                    <div className="frame-8">
                        <div className="text-wrapper-12">Is Immi-Transact Safe?</div>
                        <p className="text-wrapper-14">
                            Yes, Immi-Transact is a registered and licensed business headquartered in Chicago and ensures a safe and smooth transaction between an immigrant and an attorney
                        </p>
                    </div>
                    <div className="frame-8">
                        <div className="text-wrapper-12">How does it work?</div>
                        <p className="text-wrapper-14">
                            Yes, Immi-Transact is a registered and licensed business headquartered in Chicago and ensures a safe and smooth transaction between an immigrant and an attorney
                        </p>
                    </div>
                    <div className="frame-8">
                        <p className="text-wrapper-12">How much fee does Immi-Transact Charge?</p>
                        <p className="text-wrapper-14">
                            Yes, Immi-Transact is a registered and licensed business headquartered in Chicago and ensures a safe and smooth transaction between an immigrant and an attorney
                        </p>
                    </div>
                    <div className="frame-8">
                        <p className="text-wrapper-12">Can I request a personal attorney?</p>
                        <p className="text-wrapper-14">
                            Yes, Immi-Transact is a registered and licensed business headquartered in Chicago and ensures a safe and smooth transaction between an immigrant and an attorney
                        </p>
                    </div>
                    <div className="frame-8">
                        <p className="text-wrapper-12">Can I contact a client outside the website?</p>
                        <p className="text-wrapper-14">
                            Yes, Immi-Transact is a registered and licensed business headquartered in Chicago and ensures a safe and smooth transaction between an immigrant and an attorney
                        </p>
                    </div>
                    <div className="frame-8">
                        <div className="text-wrapper-12">Is Immi-Transact Safe?</div>
                        <p className="text-wrapper-14">
                            Yes, Immi-Transact is a registered and licensed business headquartered in Chicago and ensures a safe and smooth transaction between an immigrant and an attorney
                        </p>
                    </div>
                </div>
            </div>
            <HomepageFooter
                    asset="asset-9ldpi-1-2.svg"
                    className="homepage-footer-instance"
                    phCopyright="ph-copyright-2.svg"
                    to="/faq"
                />
        </div>
    );
};

