import "./App.css";
import Headers from "./Headers";
import NewsList from "./NewsList";
import Pagination from "./Pagination";
import Loading from "./Loading";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setdata] = useState([]);
  const [category, setcategory] = useState("technology");
  const [search, setseach] = useState("");
  const [isloading, setisloading] = useState(false);
  /////
  const [Currentpage, setCurrentpage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      const url = `  ${process.env.REACT_APP_NEWS_URL}?q=${search}&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
      console.log(`url`, url);
      setisloading(true);

      await axios.get(url).then((res) => setdata(res.data.articles));
      setisloading(false);
    };
    console.log(`calll`);
    fetchData();
  }, [category, search]);

  const changectegory = (cat) => {
    setcategory(cat);
  };

  //for pagination
  const indexofLastpost = Currentpage * postsPerPage;
  const indexofFirstpost = indexofLastpost - postsPerPage;
  const currentpost = data.slice(indexofFirstpost, indexofLastpost);
  const paginate = (number) => {
    setCurrentpage(number);
  };
  const querySerach = (value) => {
    setseach(value);
    console.log(`value`, value);
  };
  return (
    <div className=" app row container ">
      <div className="col-sm-6 offset-md-4 ">
        <Headers
          newscatagory={category}
          setcat={changectegory}
          querySerach={querySerach}
        />
        <div className="d-flex">
          <small className="text-black-50 text-dark">
            About {0} result found
          </small>
          <small className="text-black-50 ml-auto">
            page {1} of {110}
          </small>
        </div>
        {isloading ? (
          <Loading />
        ) : (
          <NewsList news={currentpost} isloading={isloading} />
        )}

        <Pagination
          postsPerPage={postsPerPage}
          totalPost={data.length}
          paginate={paginate}
        />
      </div>
    </div>
  );
}
export default App;
