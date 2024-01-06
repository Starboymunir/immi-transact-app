"use client"
// Group.js
// ... (import statements)
// PropertyDefaultWrapper.js
import PropTypes from "prop-types";
import React, { useReducer, useEffect } from "react";

import "./styles/joinpage.css";
import "../globals.css";

export const Group = ({ property1, className, onSelect, selected }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default-cli-card",
    isClicked: selected,
  });

  useEffect(() => {
    dispatch({ type: "update_selected", payload: selected });
  }, [selected]);

  return (
    <div
      className={`group ${className} ${state.property1} ${state.isClicked ? "clicked" : ""}`}
      onMouseLeave={() => {
        dispatch({ type: "mouse_leave" });
      }}
      onMouseEnter={() => {
        dispatch({ type: "mouse_enter" });
      }}
      onClick={() => {
        onSelect(state.property1);
      }}
    >
      <div className="overlap-group">
        <div className={`rectangle ${state.property1}`}>
          <div className={`ellipse ${state.isClicked ? "clicked" : ""}`} />
          <img
            className="face-agent"
            alt="Face agent"
            src={state.property1 === "hover-att-card" ? "face-agent.svg" : "face-agent.svg"}
          />
          <p className="text-wrapper">I am a client, applying for a green card</p>
        </div>
      </div>
    </div>
  );
};

// ... (reducer function and propTypes)

function reducer(state, action) {
  switch (action.type) {
    case "mouse_enter":
      return {
        ...state,
        property1: "hover-att-card",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: state.isClicked ? "clicked" : "default-att-card",
      };

    case "update_selected":
      return {
        ...state,
        isClicked: action.payload,
      };

    default:
      return state;
  }
}
