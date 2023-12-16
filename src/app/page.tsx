import React from "react";
import Button from "./components/Button";
//import img from 'next/img'
// { Reviews } from "./components/reviews";
import { HeroSectionWrapper } from "./components/HeroSectionWrapper";
import "./globals.css";
import Reviews from "./components/reviews";
import Head from "next/head";
import Heade from "./components/head";
import "./components/styles/buttons.css";
import HomepageFooter from "./HomepageFooter";
import "./components/styles/hero-section.css"

export default function HomePage() {
  return (

    <div className="homepage">
      <Heade />
      <div className="div-3">
        <HeroSectionWrapper className="hero-section" property1="hero-section-client" />
        <div className="frame-18">
          <div className="frame-19">
            <div className="text-wrapper-21">What do we do?</div>
            <div className="frame-20">
              <div className="frame-14">
                <img className="img-2" alt="Icon park one key" src="icon-park-one-key.png" /> 
                <div className="text-wrapper-22">
                  <span>
                  To create an all-round digital platform where potential immigrants connect with trusted attorneys
                  </span>

                </div>
              </div>
              <div className="frame-14">
                <img className="img-2" alt="Icon park two key" src="icon-park-two-key.png" /> <div className="text-wrapper-23">

                <span>
                  To create an all-round digital platform where potential immigrants connect with trusted attorneys
                  </span></div>
              </div>
              <div className="frame-14">
                <img className="img-2" alt="Icon park three key" src="icon-park-three-key.png" /> <div className="text-wrapper-23">

                <span>
                  To create an all-round digital platform where potential immigrants connect with trusted attorneys
                  </span> </div>
              </div>
            </div>
          </div>
          <div className="rectangle-div">
          <img className="rectangle-2" alt="Rectangle" src="Rectangle-55.png" />
          </div>
        </div>
        <div className="why-us">
          <div className="text-wrapper-9">Why Us?</div>
          <div className="why-us-div">
            <div className="why-us-container">
              <div className="div-wrapper">
                <div className="overlap-group-3">
                  <img className="rew mask-group-2" alt="Mask group" src="pexels-photo-by-emmy-e.png" />
                  <div className="text-wrapper-10">01</div>
                  <p className="text-wrapper-11">
                    We work with a carefully curated network of licensed immigration attorneys who have a proven track
                    record of success.
                  </p>
                </div>
              </div>
              <div className="overlap-wrapper">
                <div className="overlap">
                  <img className="rew mask-group-2" alt="Mask group" src="pexels-photo-by-monstera-production.png" />
                  <div className="text-wrapper-10">02</div>
                  <p className="text-wrapper-11">
                    ImmiTransact uses smart algorithms and personalized preferences to connect you with attorneys who best
                    fit your specific needs.
                  </p>

                </div>
              </div>
              <div className="group-3">
                <div className="overlap">
                  <img className="mask-group-2" alt="Mask group" src="pexels-photo-by-monstera-production.png" />
                  <div className="text-wrapper-10">03</div>
                  <p className="text-wrapper-11">
                    ImmiTransact offers a network of licensed attorneys to simplify the process of hiring qualified,
                    licensed attorneys for permanent residency and citizenship applications.
                  </p>

                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="steps-involved">
          <div className="text-wrapper-4">4 simple steps to getting <wbr></wbr>a green card</div>
          <div className="steps-wrapper">
          <div className="rew mask-group">
              <img className="emmy" alt="Mask group" src="pexels-photo-by-emmy-e.png" />
            </div>
            <div className="stepps">
              <div className="frame-5">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="ellipse-3" >
                      <div className="text-wrapper-5">01</div>
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-6">Sign up</div>
              </div>
              <div className="frame-6">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="ellipse-3" >
                      <div className="text-wrapper-7">02</div>
                    </div>
                  </div>
                </div>
                <p className="text-wrapper-6">Register and apply for green card</p>
              </div>
              <div className="frame-7">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="ellipse-3" >
                      <div className="text-wrapper-7">03</div>
                    </div>
                  </div>
                </div>
                <p className="text-wrapper-6">Get linked to an Attorney</p>
              </div>
              <div className="frame-8">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <div className="ellipse-3" >
                      <div className="text-wrapper-8">04</div>
                    </div>
                  </div>
                </div>
                <div className="text-wrapper-6">Get your Green card.</div>
              </div>
              <Button className="design-component-instance-node" property1="primary" text="APPLY FOR GREEN CARD" />

            </div>
            
           
          </div>
        </div>
        <Reviews
          className="frame-21"
          
          property1="review-1"
         
        />

        <div className="download-app">
          <div className="frame-9">
            <div className="text-wrapper-12">Download the App</div>
            <p className="text-wrapper-13">
              Bridging Borders, Building Futures: Connect with Your Immigration Attorney Today!
            </p>
            <Button className="button-4" property1="primary-hover" text="DOWNLOAD APP" />
          </div>
        </div>
        <HomepageFooter
         
        />
      </div>

    </div>
  );
};
