import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import Headers from "./Headers";
import { newscatagory } from "./Newscatagory";

function App() {
  return (
    <div className=" app container">
      <div class="row">
        <div className="col-6">
          <Headers newscatagory={newscatagory.business} />
        </div>
      </div>
    </div>
  );
}

export default App;
