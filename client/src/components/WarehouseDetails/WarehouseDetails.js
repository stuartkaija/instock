import React, { Component } from 'react'
import editIcon from '../../assets/icons/edit-24px--white.svg';
import backIcon from "../../assets/icons/arrow_back-24px.svg";
import "./WarehouseDetails.scss";

function WarehouseDetails({warehouse}) {
    console.log(warehouse)
        return (
            <div>
                <div>
                    <div className="warehouse-details__hero">
                        <h1 className="hero__title"><img className="hero__icon" src={backIcon} alt="arrow back icon" /> {warehouse.name}</h1>
                        <img src={editIcon} alt="" className="warehouse-details__edit-icon"/>
                    </div>
                    <div className="warehouse-details__column">
                        <p className="warehouse-details__details-line">WAREHOUSE ADDRESS</p>
                        <p className="warehouse-details__details-line">{warehouse.address},</p>
                        <p className="warehouse-details__details-line">{warehouse.city}, {warehouse.country}</p>
                    </div>
                    <div className="warehouse-details__contact-container">
                        <div className="warehouse-details__column">
                            <p className="warehouse-details__details-line">CONTACT NAME</p>
                            <p className="warehouse-details__details-line">{warehouse.contact.name}</p>
                            <p className="warehouse-details__details-line">{warehouse.contact.position}</p>
                        </div>
                        <div className="warehouse-details__column">
                            <p className="warehouse-details__details-line">CONTACT INFORMATION</p>
                            <p className="warehouse-details__details-line">{warehouse.contact.phone}</p>
                            <p className="warehouse-details__details-line">{warehouse.contact.email}</p>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }

export default WarehouseDetails;