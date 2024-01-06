"use client"
import React, { useState } from "react";
import Header from "../components/header";
import AllNotifications from "./AllNotifications";
import Messages from "./Messages";
import AppliedJobs from "./AppliedJobs";
import ApprovedCards from "./ApprovedCards";
import "./style.css";
import HomepageFooter from "./HomepageFooter";

export default function MyComponent(props) {
  const [activeTab, setActiveTab] = useState("AllNotifications");

  const renderContent = () => {
    switch (activeTab) {
      case "AllNotifications":
        return <AllNotifications />;
      case "Messages":
        return <Messages />;
      case "AppliedJobs":
        return <AppliedJobs />;
      case "ApprovedCards":
        return <ApprovedCards />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="parent-notif">
        <div className="div">
          <div className="div-2">
            <Header
              className="header-instance"
              img="material-symbols-notifications-outline-2.svg"
              layer="layer-1-2.png"
              maskGroup="mask-group-7.png"
              materialSymbols="material-symbols-search-3.svg"
              memoryMessage="memory-message-8.svg"
              tablerSettings="tabler-settings-2.svg"
            />

            <div className="div-11">
              <div className="div-12">
                <div className="div-13" onClick={() => setActiveTab("AllNotifications")}>
                  All Notifications
                </div>
                <div className={`div-14 ${activeTab === "AllNotifications" ? "active-tab" : ""}`} />
              </div>
              <div className="div-15" onClick={() => setActiveTab("Messages")}>
                Messages
              </div>
              <div className={`div-16 ${activeTab === "Messages" ? "active-tab" : ""}`}>Applied Jobs</div>
              <div className={`div-17 ${activeTab === "AppliedJobs" ? "active-tab" : ""}`}>Approved Cards</div>
            </div>
            <div className="div-18">{renderContent()}</div>
          </div>
         
          <HomepageFooter/>
        </div>

        <div className="notif-div">
          <Header
            className="header-instance"
            img="material-symbols-notifications-outline-2.svg"
            layer="layer-1-2.png"
            maskGroup="mask-group-7.png"
            materialSymbols="material-symbols-search-3.svg"
            memoryMessage="memory-message-8.svg"
            tablerSettings="tabler-settings-2.svg"
          />

          <div className="notif-div-7">
            <div className="notif-div-8">
              <div  className={`notif-div-9 ${activeTab === "AllNotifications" ? "active-tab" : ""}`} onClick={() => setActiveTab("AllNotifications")}>
                All Notifications
              </div>
            </div>
            <div  className={`notif-div-11 ${activeTab === "Messages" ? "active-tab" : ""}`} onClick={() => setActiveTab("Messages")}>
              Messages
            </div>
            <div className={`notif-div-12 ${activeTab === "AppliedJobs" ? "active-tab" : ""}`} onClick={() => setActiveTab("AppliedJobs")}>Applied Jobs</div>
            <div className={`notif-div-13 ${activeTab === "ApprovedCards" ? "active-tab" : ""}`} onClick={() => setActiveTab("ApprovedCards")}>Approved Cards</div>
          </div>
          <div className="notif-div-14">{renderContent()}</div>
        </div>


      </div>

    </>
  );
}


