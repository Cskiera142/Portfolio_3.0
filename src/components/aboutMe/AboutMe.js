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
      <img className="img" src={images.profilepic} alt="Omnifood" />

      <h4>
        Having spent my formative years outside of Champaign, IL, I now proudly
        call Colorado my home. I love the pursuit of form and function. My
        journey is guided by a pursuit of a creative outlet, with a focus on the
        dynamic realm of web design.
      </h4>
    </div>
  );
}

export default AboutMe;
