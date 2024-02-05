import React, { useEffect, useState } from "react";
import "./AboutMe.css";
import * as images from "../../assets/images/Images";

function AboutMe() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Add a delay to ensure the transition takes effect
    const timeoutId = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      id="about-me-container"
      className={`initial ${loaded ? "loaded" : ""}`}
    >
      <img src={images.profilepic} alt="Omnifood" />

      <h4>
        Hi, I'm Colton! I have a passion for developing and designing websites.
        I transitioned from the high pressure job of climbing and pruning 70ft
        trees, and have moved that energy and enthusiasm into my coding career.
        Currently living in Colorado, if you can't find me working on a tricky
        bit of code, I'm likely out enjoying of the 300 sunny days this
        beautiful state has to offer with my beautiful family.
      </h4>
    </div>
  );
}

export default AboutMe;
