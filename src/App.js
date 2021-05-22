import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useRef } from "react";
import Headers from "./Headers";
import NewsList from "./NewsList";
import Pagination from "./Pagination";
import { newscatagory } from "./Newscatagory";
import { newsData } from "./NewsData";
import Loading from "./Loading";

function App() {
  return (
    <div className=" app container p-5">
      <div class="row">
        <div className="col-sm-6 offset-md-3">
          <Headers newscatagory={newscatagory.business} />

          <div className="d-flex">
            <small className="text-black-50 text-dark">
              About {0} result found
            </small>
            <small className="text-black-50 ml-auto">
              page {1}of {110}{" "}
            </small>
          </div>
          <NewsList news={newsData} />
          <Pagination />
          <Loading />
        </div>
      </div>
    </div>
  );
}

export default App;
