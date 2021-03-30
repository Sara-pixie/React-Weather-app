import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="searchForm">
            <input
              type="search"
              placeholder="Enter city"
              autoFocus
              autoComplete="off"
              className="searchInput"
            />
            <button className="searchBtn" type="submit">
              <i className="fas fa-search"></i> Search
            </button>
            <button className="myLocationBtn">
              <i className="fas fa-map-marker-alt"></i> My Location
            </button>
      </form>
    </div>
  );
}
