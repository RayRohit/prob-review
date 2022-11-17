import React from "react";
import Projects from "./Projects";
import Snapshot from "./Snapshot";
import Training from "./Training";

function App() {
  return (
    <div className="App">
      <div className="bg-light shadow shadow-lg ">
        <h2 className="text-center fw-bolder border py-3 border-5 border-secondary">
          PROBATION REVIEW
        </h2>
      </div>
      <div className="bg-white">
        <Training />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Snapshot />
      </div>
    </div>
  );
}

export default App;
