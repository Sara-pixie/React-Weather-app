import React from "react";
import './App.css';

import Search from "./Search";
import CurrentCity from "./CurrentCity";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
      <CurrentCity />
      <Footer />
    </div>
  );
}