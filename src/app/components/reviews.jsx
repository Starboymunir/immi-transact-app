"use client"
import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "../globals.css";


export const Reviews = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "review-1",
  });

  const handleNavigation = (direction) => {
    dispatch({ type: "navigate", direction });
  };

  return (
    <div className={`frame ${className}`}>
      <div className="div">
        <div className="group" onClick={() => handleNavigation("left")}>
          {/* Previous review button */}
          <img className="img" alt="Vector" src="left.svg" />
        </div>
        <div className="life-saver-immi">
          {/* Reviews content */}
          {state.property1 === "review-1" && (
            <p className="text-wrapper">
              {/* Review text */}
              &#34;Life Saver! Immi-Transact made my immigration process a breeze. The platform matched me with a highly
              knowledgeable attorney who guided me through every step. The team&#39;s professionalism and support turned
              a daunting experience into a smooth journey. I can&#39;t recommend Immi-Transact enough!&#34;
            </p>
          )}

          {state.property1 === "review-2" && (
            <p className="text-wrapper">
              {/* Review text */}
              &#34;Exceptional Service! Immi-Transact connected me with an attorney who genuinely cared about my case.
              Their dedication and expertise were evident from our first conversation. Thanks to them, I gained clarity
              on my immigration options and successfully resolved my legal matters.&#34;
            </p>
          )}

          {state.property1 === "review-3" && (
            <p className="text-wrapper">
              {/* Review text */}
              &#34;Incredibly Helpful! I was lost in the complexities of immigration laws until I found Immi-Transact.
              The platform simplified the attorney-search process for me. The attorney I was matched with was
              compassionate, and highly proficient. With their guidance, I navigated the legal system with
              confidence.&#34;
            </p>
          )}
        </div>
        <div className="group" onClick={() => handleNavigation("right")}>
          {/* Next review button */}
          <img className="img" alt="Vector" src="right.svg" />
        </div>
      </div>
      <div className="maria-r">
        {/* Reviewer's name */}
        {state.property1 === "review-1" && <>- Maria R.</>}
        {state.property1 === "review-2" && <>- Ahmed K.</>}
        {state.property1 === "review-3" && <>- Elena S</>}
      </div>
    </div>
  );
};

function reducer(state, action) {
  switch (action.type) {
    case "navigate":
      // Determine the next review based on the direction
      let nextReview;
      if (action.direction === "left") {
        nextReview = state.property1 === "review-1" ? "review-3" : `review-${parseInt(state.property1.split("-")[1]) - 1}`;
      } else if (action.direction === "right") {
        nextReview = state.property1 === "review-3" ? "review-1" : `review-${parseInt(state.property1.split("-")[1]) + 1}`;
      }

      return {
        ...state,
        property1: nextReview,
      };

    default:
      return state;
  }
}

Reviews.propTypes = {
  property1: PropTypes.oneOf(["review-3", "review-1", "review-2"]),
};

export default Reviews;
