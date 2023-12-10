

"use client"
import PropTypes from "prop-types";
import dynamic from 'next/dynamic';
import React, { useState, useEffect } from "react";
import "../globals.css";
import "./styles/buttons.css";
import "./styles/hero-section.css";

const HeroSectionAttorney = dynamic(() => import('./HeroSectionAttorney'), { ssr: false });
const HeroSectionClient = dynamic(() => import('./HeroSectionClient'), { ssr: false });

export const HeroSectionWrapper = ({ property1, className }) => {
  const [currentProperty, setCurrentProperty] = useState(property1);

  useEffect(() => {
    // Show the initial hero section immediately
    setCurrentProperty(property1);

    // Change the hero section at an interval
    const intervalId = setInterval(() => {
      setCurrentProperty((prevProperty) =>
        prevProperty === "hero-section-attorney" ? "hero-section-client" : "hero-section-attorney"
      );
    }, 300000); // Change every 5 seconds (adjust the interval as needed)

    return () => {
      clearInterval(intervalId); // Cleanup the interval on component unmount
    };
  }, [property1]); // Add property1 as a dependency to handle changes


  return (
    <div className="hero-section-wrapper">
       <div className="hero-section-instance-wrapper">
      {currentProperty === "hero-section-attorney" && <HeroSectionAttorney />}
      {currentProperty === "hero-section-client" && <HeroSectionClient />}
    </div>
    </div>
  );
};

HeroSectionWrapper.propTypes = {
  property1: PropTypes.oneOf(["hero-section-attorney", "hero-section-client"]),
};

export default HeroSectionWrapper;
 