import React, { useState } from "react";

export default function Pagination() {
  const [isEditable, setisEditable] = useState(false);
  return (
    <div className="d-flex my-4 align-items-center">
      <button className="btn btn-warning">Previous</button>
      <div className="flex-grow-1 text-center">
        {isEditable ? (
          <input type="number" value={1} placeholder="enter page " />
        ) : (
          <p
            title="double tap to edit"
            onDoubleClick={() => setisEditable({ isEditable: !isEditable })}
          >
            {1} of {100}
            <br />
            <small>double tap tp edit</small>
          </p>
        )}
      </div>
      <button className="btn btn-warning align-right ml-auto">Next </button>
    </div>
  );
}
