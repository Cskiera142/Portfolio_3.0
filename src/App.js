import { useState } from "react";
import Navigation from "./components/nav/Navigation";
import AboutMe from "./components/aboutMe/AboutMe";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import NavMobile from "./components/dropDown/NavMobile";
import "./index.css";
import ParticleBackground from "./components/particleBackground/ParticleBackground";

function App() {
  const [module, setModule] = useState([]);
  console.log(module);

  return (
    <div id="App">
      <ParticleBackground />
      <div id="home-container">
        <div id="left">
          <Navigation setModule={setModule} />
          <NavMobile setModule={setModule} />
        </div>

        <div id="right">
          <div id="project-div"> {module === "projects" && <Projects />}</div>
          <div> {module === "contact" && <Contact />}</div>
          <div> {module === "about" && <AboutMe />}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
