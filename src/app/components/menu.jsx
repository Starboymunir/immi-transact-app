import PropTypes from "prop-types";
import React, { useReducer } from "react";
import "./styles/menu.css";
import Link from "next/link";

export default function Menu({ menuType, line = "line-2.svg", img = "line-2.svg", line1 = "line-2.svg" }) {
  const [state, dispatch] = useReducer(reducer, {
    isOpen: false,
  });

  return (
    <div
    className={`menu ${state.isOpen ? (menuType === "openOtherPages" ? "open-other-pages" : "") : ""}`}
    onClick={() => {
      dispatch({ type: "click" });
    }}
  >
      {state.isOpen && menuType === "openOtherPages" ? (
        <>
          {/* Render the new menu content */}
          <div className="open-other-pages">
            <div className="menu-frame">
              <div className="menu-div">
                <img className="material-symbols" alt="Material symbols" src="material-symbols-search.svg" />
                <img className="material-symbols" alt="Material symbols" src="material-symbols-light-close.svg" />
              </div>
              <div className="menu-frame-2">
                <div className="div-wrapper">

                  <div className="text-wrapper">Home</div>
                </div>
                <div className="div-wrapper">
              
                  <div className="text-wrapper">My Applications</div>
               
                  
                </div>
                <div className="div-wrapper">
               <div className="text-wrapper">Notifications</div>
                 
                </div>
                <div className="div-wrapper">
                <div className="text-wrapper">Messages</div>
                  
                </div>
                <div className="div-wrapper">
                <div className="text-wrapper">Settings</div>
                  
                </div>
              </div>
            </div>
            <div className=" menu-frame-3">
              <div className="text-wrapper-2">Logout</div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Render the default menu content */}
          <img className="line" alt="Line" src={line} />
          <img className="line" alt="Line" src={img} />
          <img className="line" alt="Line" src={line1} />
        </>
      )}

      {/* Common content */}
      {state.isOpen && menuType === "default" && (
        <>
        <div className="menu-default">          <img
            src={state.isOpen ? "material-symbols-light-close.svg" : "material-symbols-light-close.svg"}
            alt="Material symbols"
          />
<div>Home</div>
          <Link href="../faq"><div>About Us</div></Link>
          <Link href="../contact"><div>Contact Us</div></Link>
          
          </div>

        </>
      )}
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "click":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
}

Menu.propTypes = {
  menuType: PropTypes.oneOf(["default", "openOtherPages"]),
  line: PropTypes.string,
  img: PropTypes.string,
  line1: PropTypes.string,
};
