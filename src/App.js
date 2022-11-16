import React from "react";
import Training from "./Training";

function App() {
  return (
    <div className="App">
      <div className="bg-light shadow shadow-lg py-2">
        <h2 className="text-center fw-bolder border py-2 mt-1 mx-2 border-3">
          PROBATION REVIEW
        </h2>
      </div>
      <div className="bg-white">
        <Training />
      </div>
    </div>
  );
}

export default App;
