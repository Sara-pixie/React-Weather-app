import React from "react";
import './App.css';

import CurrentCity from "./CurrentCity";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <CurrentCity />
      <div className="Footer">
      <a
        href="https://github.com/Sara-pixie/React-Weather-app"
        target="_blank"
        className="sara-git-link"
        rel="noreferrer"
      >
        Open-source Code
      </a>{" "}
      <strong>by Sara Paranuk</strong>
    </div>
    </div>
  );
}