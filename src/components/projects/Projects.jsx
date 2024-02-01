import React, { useEffect, useState } from "react";

import "./Projects.css";

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
      Hello world
    </div>
  );
}

export default Projects;
