import { useState } from "react";
import Navigation from "./components/nav/Navigation";
import Blob from "./components/blob/Blob";
import AboutMe from "./components/aboutMe/AboutMe";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./index.css";

function App() {
  const [module, setModule] = useState([]);
  console.log(module);

  return (
    <div id="App">
      <div id="home-container">
        <div id="left">
          <Navigation setModule={setModule} />
        </div>
        {/* <div id="right"> {module === "about" && <AboutMe />}</div> */}
        <div id="right"> {module === "projects" && <Projects />}</div>
        <div id="right"> {module === "contact" && <Contact />}</div>
        <div id="right"> {module === "about" && <AboutMe />}</div>
      </div>
      <Blob />
    </div>
  );
}

export default App;
