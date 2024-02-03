import { useState } from "react";
import Navigation from "./components/nav/Navigation";
import AboutMe from "./components/aboutMe/AboutMe";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./index.css";
import ParticlesBackground from "./components/particles/ParticlesBackground";
import ParticleTest from "./components/ParticleTest";

function App() {
  const [module, setModule] = useState([]);
  console.log(module);

  return (
    <div id="App">
      <ParticleTest />
      <div id="home-container">
        <div id="left">
          <Navigation setModule={setModule} />
        </div>

        <div id="right">
          <div> {module === "projects" && <Projects />}</div>
          <div> {module === "contact" && <Contact />}</div>
          <div> {module === "about" && <AboutMe />}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
