import "./App.css";
import Headers from "./Headers";
import NewsList from "./NewsList";
import Pagination from "./Pagination";
import { newscatagory } from "./Newscatagory";
import { newsData } from "./NewsData";
import Loading from "./Loading";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setdata] = useState([]);
  const [category, setcategory] = useState("technology");

  useEffect(() => {
    const url = `  https://newsapi.org/v2/top-headlines?category=${category}&apiKey=5246413deef946ceb84dffb2176df416`;
    axios.get(url).then((res) => setdata(res.data.articles));
  }, [category]);

  const changectegory = (cat) => {
    setcategory(cat);
  };

  // const url = `${process.env.REACT_APP_NEWS_URL}?country=de&category=business&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
  console.log(`process.`, process.env.REACT_APP_NEWS_URL);
  return (
    <div className=" app container p-5">
      <div class="row">
        <div className="col-sm-6 offset-md-3 ">
          <Headers newscatagory={category} setcat={changectegory} />

          <div className="d-flex">
            <small className="text-black-50 text-dark">
              About {0} result found
            </small>
            <small className="text-black-50 ml-auto">
              page {1} of {110}
            </small>
          </div>
          <NewsList news={data} />
          <Pagination />
          <Loading />
        </div>
      </div>
    </div>
  );
}

export default App;
