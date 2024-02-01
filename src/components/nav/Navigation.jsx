import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Add a delay to ensure the transition takes effect
    const timeoutId = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const boldAndColorStyle = {
    fontWeight: "bold",
    color: "#D9BD5F",
  };

  return (
    <div id="nav-card" className={`initial ${loaded ? "loaded" : ""}`}>
      <h1 id="name">
        Hi, my name is{" "}
        <strong style={boldAndColorStyle}>
          <span className="custom-font">C</span>olton
        </strong>
      </h1>
      <p id="title">
        I'm a <strong style={boldAndColorStyle}>Developer</strong> and{" "}
        <strong style={boldAndColorStyle}>Designer</strong> working with MERN.
      </p>
      <ul id="nav-list">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
