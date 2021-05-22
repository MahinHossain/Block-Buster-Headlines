import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import Headers from "./Headers";
import NewsList from "./NewsList";
import Pagination from "./Pagination";
import { newscatagory } from "./Newscatagory";
import { newsData } from "./NewsData";
function App() {
  return (
    <div className=" app container p-5">
      <div class="row">
        <div className="col-sm-6 offset-md-3">
          <Headers newscatagory={newscatagory.business} />
          <NewsList news={newsData} />
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default App;
