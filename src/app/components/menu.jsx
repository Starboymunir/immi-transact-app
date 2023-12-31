import PropTypes from "prop-types";
import React, { useReducer } from "react";
import "./styles/menu.css";
import Link from "next/link";
import authService from "../context/AuthContext";
import { useRouter } from "next/navigation";

export default function Menu({ menuType, line = "line-2.svg", img = "line-2.svg", line1 = "line-2.svg" }) {
  const [state, dispatch] = useReducer(reducer, {
    isOpen: false,
  });
const router = useRouter()
  const handleClick = (event) => {
    const isCloseIcon = event.target.classList.contains('material-symbols-light-close');

    if (isCloseIcon) {
      dispatch({ type: 'click' });
    } else {
      // Handle other click actions or prevent the menu from closing
      // For example, you might want to navigate to a different page or perform other actions
    }
  };

    const handleToggleMenu = () => {
      dispatch({ type: 'click' });
    };
    const handleLogout = async () => {
      await authService.signOut();
      router.push("/"); // Redirect to the home page after logout
    };

  return (
    <>
      {state.isOpen && (
        <div className="overlay" onClick={() => dispatch({ type: 'click' })}></div>
      )}

      <div
        className={`menu ${state.isOpen ? (menuType === "openOtherPages" ? "open-other-pages" : "") : ""}`}
        onClick={handleClick}
      >
        {state.isOpen && menuType === "openOtherPages" ? (
          <>
            {/* Render the new menu content */}
            <div className="overlay">
            <div className="open-other-pages">
              <div className="menu-frame">
                <div className="menu-div">
                  <img className="material-symbols material-symbols-light-close" alt="Material symbols" src="material-symbols-search.svg" />
                  <img className="material-symbols material-symbols-light-close" alt="Material symbols" src="material-symbols-light-close.svg" />
                </div>
                <div className="menu-frame-2">
                <Link href="../../">
                <div className="div-wrapper">

                  <div className="text-wrapper">Home</div>
                </div>
                </Link>
                <Link href="../notifs">
                <div className="div-wrapper">

                  <div className="text-wrapper">My Applications</div>
                </div>
                </Link>
                <Link href="../notifs">
                <div className="div-wrapper">

                  <div className="text-wrapper">Notifications</div>
                </div>
                </Link>
                <Link href="../chat">
                <div className="div-wrapper">

                  <div className="text-wrapper">Messages</div>
                </div>
                </Link>
                <Link href="../clientprofile">
                <div className="div-wrapper">

                  <div className="text-wrapper">Profile</div>
                </div>
                </Link>
            
              </div>
            </div>
            <div className=" menu-frame-3" onClick={handleLogout}>
              <div className="text-wrapper-2">Logout</div>
              </div>
            </div>
            </div>
          </>
        ) : (
          <div className="default-menu" onClick={handleToggleMenu}>
          <img className="line" alt="Line" src={line} />
          <img className="line" alt="Line" src={img} />
          <img className="line" alt="Line" src={line1} />
        </div>

        )}

        {/* Common content */}
        {state.isOpen && menuType === "default" && (
          <>
            <div className="menu-default">
              <img
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
    </>
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
