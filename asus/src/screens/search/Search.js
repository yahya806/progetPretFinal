import React from "react";
import "./Search.css"
const Search = ({ filterText }) => {
  return (
    <div className="se" style={{ backgroundColor: "blue",width:'30%' }}>
      <input
        id="form-control-f1"
        type="text"
        placeholder="Search Here"
        onChange={(e) => filterText(e.target.value)}
      />
    </div>
  );
};

export default Search;
