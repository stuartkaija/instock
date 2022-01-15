import React from "react";
import searchIcon from "../../assets/icons/search-24px.svg";
import "./HeroWithSearch.scss";

function HeroWithSearch({ title }) {
  return (
    <div className="hero">
      <h1 className="hero__title">{title}</h1>
      <div className="hero__search-box">
        <input
          type="search"
          name="searchBar"
          id="searchBar"
          placeholder="Search..."
          className="hero__search-bar"
        />
        <img
          src={searchIcon}
          alt="search icon"
          className="hero__search-box-icon"
        />
      </div>
      <button className="hero__button">+ Add New Warehouse</button>
    </div>
  );
}

export default HeroWithSearch;
