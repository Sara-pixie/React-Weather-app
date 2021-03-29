import React from "react";
import './App.css';

import Search from "./Search";
import CurrentCity from "./CurrentCity";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <CurrentCity />
        <Footer />
      </div>
    </div>
  );
}