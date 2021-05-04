import React, { Component } from "react";
import "../css/searchbutton.css";

class Searchbutton extends Component {
  render() {
    return (
      <div className="searchButton">
        <input className="search" type="Search" placeholder="Search"></input>
        <button
          className="searchBtn"
          crossOrigin="anonymous"
        >
          <i className="fas fa-search"></i>
        </button>
      </div>
    );
  }
}

export default Searchbutton;
