import "./App.css";
import Headers from "./Headers";
import NewsList from "./NewsList";
import Pagination from "./Pagination";
import { newscatagory } from "./Newscatagory";
import { newsData } from "./NewsData";
import Loading from "./Loading";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setdata] = useState([]);
  const url =
    "https://newsapi.org/v2/top-headlines?category=technology&apiKey=d940484e71484a569dee8441e81c79c4";

  axios.get(url).then((res) => setdata(res.data.articles));
  console.log(`data`, data);

  const [category, setcategory] = useState("");

  const changectegory = (cat) => {
    setcategory(cat);
  };

  // const url = `${process.env.REACT_APP_NEWS_URL}?country=de&category=business&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

  return (
    <div className=" app container p-5">
      <div class="row">
        <div className="col-sm-6 offset-md-3">
          <Headers
            newscatagory={newscatagory.technology}
            setcat={changectegory}
          />

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
