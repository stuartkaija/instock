import React from "react";
import searchIcon from "../../assets/icons/search-24px.svg";
import "./InventoryHeroWithSearch.scss";
import { NavLink } from "react-router-dom";

function InventoryHeroWithSearch({ inventoryTitle }) {
  return (
    <div className="inventory-hero">
      <h1 className="inventory-hero__title">{inventoryTitle}</h1>
      <div className="inventory-hero__search-box">
        <input
          type="search"
          name="searchBar"
          id="searchBar"
          placeholder="Search..."
          className="inventory-hero__search-bar"
        />
        <img
          src={searchIcon}
          alt="search icon"
          className="inventory-hero__search-box-icon"
        />
      </div>
      <NavLink to="/inventory/AddNew">
        <button className="inventory-hero__button">
          + Add New Inventory Item
        </button>
      </NavLink>
    </div>
  );
}

export default InventoryHeroWithSearch;
