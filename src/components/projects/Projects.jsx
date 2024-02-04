import React, { useEffect, useState } from "react";
import "./Projects.css";
import * as images from "../../assets/images/Images";

function Projects() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Add a delay to ensure the transition takes effect
    const timeoutId = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div id="project-container" className={`initial ${loaded ? "loaded" : ""}`}>
      <div id="project">
        <a className="img-tilt" href="https://levelup-games.netlify.app/">
          {" "}
          <img
            className="img"
            src={images.levelupgaming}
            alt="Level Up gaming"
          />
          <p>Fullstack Capstone</p>
        </a>
        <a className="img-tilt" href="https://omnifood-colton.netlify.app/">
          <img className="img" src={images.omnifood} alt="Omnifood" />
          <p>Omnifood</p>
        </a>
        <a className="img-tilt" href="https://maptygeotracker.netlify.app/">
          <img className="img" src={images.mapty} alt="Mapty" />
          <p>Mapty Run Tracker</p>
        </a>
        <a className="img-tilt" href="https://piggame5ceb06.netlify.app/">
          <img className="img" src={images.piggame} alt="Pig Game" />
          <p>Pig Game.</p>
        </a>
        <a className="img-tilt" href="https://simple-tasks-mngr.netlify.app/">
          <img className="img" src={images.todolist} alt="ToDo List" />
          <p>Task Tracker</p>
        </a>
      </div>
    </div>
  );
}

export default Projects;
