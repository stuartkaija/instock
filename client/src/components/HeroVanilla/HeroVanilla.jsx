import React from 'react'
import icon from "../../assets/icons/arrow_back-24px.svg";
import { Link } from 'react-router-dom';
import "./HeroVanilla.scss";

function HeroVanilla({ title, inventoryId }) {
    return (
        <div className="hero-vanilla">
            <h1 className="hero-vanilla__title">
                <Link to={"/inventory/" + inventoryId}>
                    <img className="hero-vanilla__icon" src={icon} alt="arrow back icon" />
                </Link> {title}</h1>
        </div>
    )
}

export default HeroVanilla;
