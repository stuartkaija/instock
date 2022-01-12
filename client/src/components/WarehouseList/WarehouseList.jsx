import React from 'react';
import searchIcon from "../../assets/icons/search-24px.svg";
import "./WarehouseList.scss";

function WarehouseList() {
    return (
        <main className="warehouse-list__container">
            <div className="warehouse-list__hero-container">
                <h1 className="warehouse-list__title">
                    Warehouses
                </h1>
                <div className="warehouse-list__search-box">
                    <input 
                        type="search" 
                        name="searchBar"
                        id="searchBar"
                        placeholder="Search..."
                        className="warehouse-list__search-bar" 
                    />
                    <img src={searchIcon} alt="search icon"/>
                </div>
                <button className="warehouse-list__button">
                    + Add New Warehouse
                </button>
            </div>
        </main>
    )
}

export default WarehouseList
