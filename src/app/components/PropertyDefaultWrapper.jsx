"use client"
// PropertyDefaultWrapper.js
import PropTypes from "prop-types";
import React, { useReducer, useEffect } from "react";

import "./styles/joinpage.css";
import "../globals.css";

// ... (import statements)

export const PropertyDefaultWrapper = ({ property1, className, onSelect, selected }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default-att-card",
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
            className="layers-edit"
            alt="layers edit"
            src={state.property1 === "hover-att-card" ? "layers-edit.svg" : "layers-edit.svg"}
          />
          <p className="text-wrapper">I am an attorney, facilitating a green card</p>
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

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["default-att-card", "hover-att-card"]),
  className: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool,
};
