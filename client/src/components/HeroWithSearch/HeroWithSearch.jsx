import React from "react";
import searchIcon from "../../assets/icons/search-24px.svg";
import "./HeroWithSearch.scss";
import { Link } from 'react-router-dom';

function HeroWithSearch() {
    return (
        <div className="hero">
            <h1 className="hero__title">
                    Warehouses
                </h1>
                <div className="hero__search-box">
                    <input 
                        type="search" 
                        name="searchBar"
                        id="searchBar"
                        placeholder="Search..."
                        className="hero__search-bar" 
                    />
                    <img src={searchIcon} alt="search icon" className="hero__search-box-icon" />
                </div>
                <Link to='warehouses/add'>
                <button className="hero__button">
                    + Add New Warehouse
                </button>
                </Link>
        </div>
    )
}

export default HeroWithSearch;
