import React from "react";
import searchIcon from "../../assets/icons/search-24px.svg";
import "./InventoryHeroWithSearch.scss";
import { NavLink } from "react-router-dom";

function InventoryHeroWithSearch({ inventoryTitle }) {
  return (
    <div className="hero">
      <h1 className="hero__title">{inventoryTitle}</h1>
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
      <NavLink to="/inventory/AddNew">
        <button className="hero__button">+ Add New Warehouse</button>
      </NavLink>
    </div>
  );
}

export default InventoryHeroWithSearch;
