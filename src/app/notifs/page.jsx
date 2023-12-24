"use client"
import * as React from "react";
import Header from "../components/header";

export default function MyComponent(props) {
  return (
    <>
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
      <style jsx>{`
        .div {
          background-color: var(--White, #fff);
          display: flex;
          flex-direction: column;
          align-items: end;
          padding: 43px 80px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .div-2 {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          margin: 0 20px;
        }
        @media (max-width: 991px) {
          .div-2 {
            max-width: 100%;
            margin-right: 10px;
          }
        }
        .div-3 {
          display: flex;
          width: 100%;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-4 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-4 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .img {
          aspect-ratio: 10.12;
          object-fit: contain;
          object-position: center;
          width: 172px;
          overflow: hidden;
          max-width: 100%;
          margin: auto 0;
        }
        .div-5 {
          align-self: start;
          display: flex;
          margin-top: 5px;
          justify-content: space-between;
          gap: 20px;
          padding: 10px;
        }
        .div-6 {
          color: var(--Black, #000);
          text-align: center;
          font: 500 16px/140% Work Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-7 {
          color: var(--Black, #000);
          text-align: center;
          font: 500 16px/140% Work Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-8 {
          border-radius: 25px;
          border: 0.5px solid var(--Grey-4, #2c2d2c);
          align-self: start;
          display: flex;
          gap: 10px;
          padding: 11px 16px;
        }
        @media (max-width: 991px) {
          .div-8 {
            max-width: 100%;
            flex-wrap: wrap;
            padding-right: 20px;
          }
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          overflow: hidden;
          max-width: 100%;
        }
        .div-9 {
          color: var(--Grey-2, #727272);
          text-align: center;
          align-self: center;
          flex-grow: 1;
          white-space: nowrap;
          margin: auto 0;
          font: 500 12px/140% Work Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-9 {
            white-space: initial;
          }
        }
        .div-10 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 28px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
          margin: auto 0;
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 32px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
          margin: auto 0;
        }
        .img-5 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 32px;
          overflow: hidden;
          align-self: center;
          max-width: 100%;
          margin: auto 0;
        }
        .img-6 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 46px;
          overflow: hidden;
          align-self: stretch;
          max-width: 100%;
        }
        .div-11 {
          align-items: flex-start;
          align-self: start;
          display: flex;
          width: 749px;
          max-width: 100%;
          justify-content: space-between;
          gap: 20px;
          margin: 69px 0 0 50px;
        }
        @media (max-width: 991px) {
          .div-11 {
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }
        .div-12 {
          justify-content: center;
          align-self: stretch;
          display: flex;
          flex-grow: 0;
          flex-basis: 0%;
          flex-direction: column;
          padding: 10px;
        }
        .div-13 {
          color: #000;
          white-space: nowrap;
          font: 500 16px/140% Work Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-13 {
            white-space: initial;
          }
        }
        .div-14 {
          background-color: #000;
          height: 2px;
        }
        .div-15 {
          color: #000;
          align-self: center;
          margin: auto 0;
          font: 500 16px/140% Work Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-16 {
          color: #000;
          margin: auto 0;
          font: 500 16px/140% Work Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-17 {
          color: #000;
          margin: auto 0;
          font: 500 16px/140% Work Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .div-18 {
          color: var(--Grey-3, #4a4a4a);
          letter-spacing: -0.48px;
          align-self: center;
          margin-top: 200px;
          white-space: nowrap;
          font: 700 24px Work Sans, sans-serif;
        }
        @media (max-width: 991px) {
          .div-18 {
            margin-top: 40px;
            white-space: initial;
          }
        }
        .div-19 {
          align-self: stretch;
          display: flex;
          padding-right: 35px;
          align-items: start;
          justify-content: space-between;
          gap: 20px;
          margin: 369px 20px 0;
        }
        @media (max-width: 991px) {
          .div-19 {
            max-width: 100%;
            flex-wrap: wrap;
            padding-right: 20px;
            margin: 40px 10px 0 0;
          }
        }
        .img-7 {
          aspect-ratio: 9.42;
          object-fit: contain;
          object-position: center;
          width: 339px;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        .div-20 {
          justify-content: space-between;
          align-self: stretch;
          display: flex;
          gap: 2px;
        }
        @media (max-width: 991px) {
          .div-20 {
            max-width: 100%;
            flex-wrap: wrap;
          }
        }
        .div-21 {
          color: var(--Grey-1, #a2a6a7);
          text-align: center;
          white-space: nowrap;
          align-items: start;
          border-radius: 25px 0px 0px 25px;
          border: 1px solid var(--Black, #000);
          box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.04);
          flex-grow: 1;
          justify-content: center;
          padding: 15px 60px 15px 16px;
          font: 500 12px/140% Work Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-21 {
            white-space: initial;
            padding-right: 20px;
          }
        }
        .div-22 {
          color: var(--Hover, #f1f2f2);
          letter-spacing: 0.64px;
          text-transform: uppercase;
          white-space: nowrap;
          justify-content: center;
          border-radius: 0px 25px 25px 0px;
          box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.04);
          background-color: var(--Black, #000);
          flex-grow: 1;
          padding: 14px 15px;
          font: 700 16px Work Sans, sans-serif;
        }
        @media (max-width: 991px) {
          .div-22 {
            white-space: initial;
          }
        }
        .div-23 {
          display: flex;
          width: 651px;
          max-width: 100%;
          flex-direction: column;
          align-items: start;
          margin: 44px 20px 50px 0;
        }
        @media (max-width: 991px) {
          .div-23 {
            margin: 40px 10px 40px 0;
          }
        }
        .div-24 {
          color: var(--Black, #000);
          align-self: stretch;
          font: 500 16px/22px Work Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-24 {
            max-width: 100%;
          }
        }
        .div-25 {
          align-self: stretch;
          display: flex;
          margin-top: 43px;
          justify-content: space-between;
          gap: 20px;
        }
        @media (max-width: 991px) {
          .div-25 {
            max-width: 100%;
            flex-wrap: wrap;
            margin-top: 40px;
          }
        }
        .div-26 {
          color: var(--Black, #000);
          letter-spacing: 0.36px;
          text-transform: uppercase;
          font: 700 12px Work Sans, sans-serif;
        }
        .div-27 {
          color: var(--Black, #000);
          letter-spacing: 0.36px;
          text-transform: uppercase;
          font: 700 12px Work Sans, sans-serif;
        }
        .div-28 {
          color: var(--Black, #000);
          letter-spacing: 0.36px;
          text-transform: uppercase;
          font: 700 12px Work Sans, sans-serif;
        }
        .div-29 {
          color: var(--Black, #000);
          letter-spacing: 0.36px;
          text-transform: uppercase;
          font: 700 12px Work Sans, sans-serif;
        }
        .div-30 {
          justify-content: center;
          display: flex;
          margin-top: 40px;
          gap: 8px;
        }
        .img-8 {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 24px;
          overflow: hidden;
          max-width: 100%;
        }
        .div-31 {
          color: var(--Black, #000);
          align-self: center;
          flex-grow: 1;
          white-space: nowrap;
          margin: auto 0;
          font: 500 12px/140% Work Sans, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-31 {
            white-space: initial;
          }
        }
      `}</style>
    </>
  );
}


