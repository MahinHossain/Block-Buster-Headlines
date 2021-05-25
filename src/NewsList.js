import React from "react";

const Newsitem = ({ item }) => (
  <div className=" mt-4 ">
    <div class="card  border border-dark ">
      <img class="card-img-top" src={item.urlToImage} alt="Card image" />
      <div class="card-body">
        <strong class="card-title ">Author:{item.author}</strong>
        <h4 class="card-title">Title:{item.title}</h4>
        <p class="card-text">Description:{item.description}</p>
        <small class="card-text mr-auto mt-4">
          Publish Date:{item.publishedAt}
        </small>
        <a href="#" class="btn btn-secondary float-right">
          {item.source.name}
        </a>
      </div>
    </div>
  </div>
);
function NewsList({ news }) {
  return (
    <div className="">
      {news && news.length == 0 && (
        <h3 className="text-danger">There is no Data</h3>
      )}
      {news && news.map((item) => <Newsitem item={item} key={item.img} />)}{" "}
    </div>
  );
}

export default NewsList;
