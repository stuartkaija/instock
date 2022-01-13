import React from 'react'
import icon from "../../assets/icons/arrow_back-24px.svg";
import "./HeroVanilla.scss";

function HeroVanilla({ title }) {
    return (
        <div className="hero">
            <img className="hero__icon" src={icon} alt="arrow back icon" />
            <h1 className="hero__title">{title}</h1>
        </div>
    )
}

export default HeroVanilla;
