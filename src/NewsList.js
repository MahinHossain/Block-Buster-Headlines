import React from "react";

const Newsitem = ({ item }) => (
  <div className="card  w-100 h-50 mt-3">
    {/* <div>
      <img className="card-img-top " src={item.img} alt={item.title} />
      <div className="card-body">
        <h6 className="card-title"> {item.title}</h6>
        <small> deats</small>
      </div>
    </div>
*/}
    <div class="card">
      <img class="card-img-top" src={item.img} alt="Card image" />
      <div class="card-body">
        <h4 class="card-title">John Doe</h4>
        <p class="card-text">Some example text.</p>
        <a href="#" class="btn btn-secondary float-right">
          Source
        </a>
      </div>
    </div>
  </div>
);
function NewsList({ news }) {
  return (
    <div>
      {news && news.length == 0 && (
        <h3 className="tex-danger">There is no Data</h3>
      )}

      {news && news.map((item) => <Newsitem item={item} key={item.img} />)}
    </div>
  );
}

export default NewsList;
