import React, { useState } from "react";
import { newscatagory } from "./Newscatagory";
export default function Headers(props) {
  const [search, setsearch] = useState("");
  const onkeypressf = () => {};
  return (
    <div>
      <div class="form-group">
        <h3>Block Buster Headlines</h3>
        <label for="search"></label>
        <input
          type="search"
          class="form-control"
          name="search"
          placeholder="Type & Search for blockbuster headlines"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          onKeyPress={onkeypressf}
        />

        {newscatagory &&
          Object.keys(newscatagory).map((item) => {
            if (props.newscatagory === newscatagory[item]) {
              return (
                <button
                  className=" btn btn-sm btn-warning inline mr-3 mt-2"
                  onClick={() => props.setcat(newscatagory[item])}
                >{`#${newscatagory[item]}`}</button>
              );
            }
            return (
              <button
                className=" btn btn-sm btn-light inline mr-3 mt-2"
                onClick={() => props.setcat(newscatagory[item])}
              >{`#${newscatagory[item]}`}</button>
            );
          })}
      </div>
    </div>
  );
}
