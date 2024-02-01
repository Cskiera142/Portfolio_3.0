import "./index.css";

import Navigation from "./components/nav/Navigation";
import Blob from "./components/blob/Blob";

function App() {
  return (
    <div id="App">
      <Blob />
      <div id="home-container">
        <div id="left">
          <Navigation />
        </div>
        <div id="right"></div>
      </div>
    </div>
  );
}

export default App;
