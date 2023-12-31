"use client"
import * as React from "react";
import Header from "../components/header";
import "./style.css"

export default function MyComponent(props) {
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
                <div className="div-13">All Notifications</div>
                <div className="div-14" />
              </div>
              <div className="div-15">Messages</div>
              <div className="div-16">Applied Jobs</div>
              <div className="div-17">Approved Cards</div>
            </div>
            <div className="div-18">No notifications yet</div>
          </div>
          <div className="div-19">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0fa94c9378f15455af83c1b500a8fd8017a076e7ef755bf1823762c2b33c5f0?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
              className="img-7"
            />
            <div className="div-20">
              <div className="div-21">Email address</div>
              <div className="div-22">Subscribe for updates</div>
            </div>
          </div>
          <div className="div-23">
            <div className="div-24">
              Immi-Transact is not a law firm and does not provide legal advice.
              We connect individuals with licensed immigration attorneys for legal
              consultations and representation.
            </div>
            <div className="div-25">
              <div className="div-26">Terms of service</div>
              <div className="div-27">security & Privacy</div>
              <div className="div-28">faqS</div>
              <div className="div-29">Contact us</div>
            </div>
            <div className="div-30">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/47bd7ed30eea273a9b81b9aab46e70137f6c7ce8f8cc74b3614a883f14856f40?apiKey=1504e5e6f32d49db86245656e24c0c9a&"
                className="img-8"
              />
              <div className="div-31">
                Immi-Transact 2023. All rights reserved
              </div>
            </div>
          </div>
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
              <div className="notif-div-9">All Notifications</div>
              <div className="notif-div-10" />
            </div>
            <div className="notif-div-11">Messages</div>
            <div className="notif-div-12">Applied Jobs</div>
            <div className="notif-div-13">Approved Cards</div>
          </div>
          <div className="notif-div-14">No Notifications yet</div>
        </div>



      </div>

    </>
  );
}


