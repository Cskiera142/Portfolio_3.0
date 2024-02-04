import React, { useEffect, useState } from "react";
import "./Navigation.css";

function Navigation({ setModule }) {
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
      <p></p>
      <h1 id="name">
        Hi, I'm <strong style={boldAndColorStyle}>Colton</strong>
      </h1>
      <p id="title">
        I'm a <strong style={boldAndColorStyle}>Developer</strong> and{" "}
        <strong style={boldAndColorStyle}>Designer</strong> providing elegant
        solutions for your development needs.
      </p>
      <ul id="nav-list">
        <li>
          <button className="button" onClick={() => setModule("projects")}>
            Projects
          </button>
        </li>
        <li>
          <button className="button" onClick={() => setModule("contact")}>
            Contact
          </button>
        </li>
        <li>
          <button className="button" onClick={() => setModule("about")}>
            About
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
