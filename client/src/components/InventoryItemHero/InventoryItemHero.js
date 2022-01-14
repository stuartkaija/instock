import React from 'react'
import editIcon from '../../assets/icons/edit-24px--white.svg';
import backIcon from "../../assets/icons/arrow_back-24px.svg";


export default function InventoryItemHero() {
    return (
        <div className="warehouse-details__hero">
            <h1 className="hero__title"><img className="hero__icon" src={backIcon} alt="arrow back icon" /> Inventory Item</h1>
            <img src={editIcon} alt="" className="warehouse-details__edit-icon"/>
        </div>
    )
}
