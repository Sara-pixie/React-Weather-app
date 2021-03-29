import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="searchForm">
        <div className="row">
          <div className="col-sm-8">
            <input
              type="search"
              placeholder="Enter city"
              autoFocus
              autoComplete="off"
              className="form-control searchInput"
            />
          </div>
          <div className="col-sm-4">
            <button className="btn btn-primary" type="submit">
              <i className="fas fa-search"></i> Search
            </button>

            <button className="btn btn-success">
              <i className="fas fa-map-marker-alt"></i> My Location
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
