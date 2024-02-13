import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavMobile.css";

const NavMobile = ({ setModule }) => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [menuWidth, setMenuWidth] = useState(0);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
      setMenuWidth(400); // Adjust the width based on your design
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
      setMenuWidth(0);
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div id="hamburger">
      <h3>Hi, I'm Colton</h3>
      <nav>
        <ul
          id="burger-list"
          style={{ width: `${isMenuClicked ? menuWidth : 0}px` }}
        >
          <li>
            {/* Icon Family Classic Select an Icon Style
            <FontAwesomeIcon icon="fa-solid fa-bars" />
            <div className="burger-menu" onClick={updateMenu}>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
              <div className={burger_class}></div>
            </div> */}
            {/* <button className="burger-button" onClick={updateMenu}> */}
            {/* <i className="fa-solid fa-bars"></i> */}
            <FontAwesomeIcon icon={["far", "coffee"]} />
            {/* </button> */}
          </li>
          <li>
            <button
              className="burger-button"
              onClick={() => setModule("projects")}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className="burger-button"
              onClick={() => setModule("contact")}
            >
              Contact
            </button>
          </li>
          <li>
            <button
              className="burger-button"
              onClick={() => setModule("about")}
            >
              About
            </button>
          </li>
        </ul>
      </nav>

      <div className={menu_class}></div>
    </div>
  );
};

export default NavMobile;
