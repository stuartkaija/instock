import React, { Component } from 'react'
import editIcon from '../../assets/icons/edit-24px--white.svg';
import backIcon from "../../assets/icons/arrow_back-24px.svg";
import "./WarehouseDetails.scss";
import { NavLink } from 'react-router-dom';

function WarehouseDetails({warehouse}) {
        return (
            <div>
                <div>
                    <div className="warehouse-details__hero">
                        <h1 className="warehouse__hero-title">
                            <NavLink to='/warehouses/'>
                                <img className="hero__icon" src={backIcon} alt="arrow back icon" /> 
                            </NavLink>
                            {warehouse.name}</h1>
                        <NavLink to={`/warehouses/` + warehouse.id + `/edit`} warehouse={warehouse} >
                            <img src={editIcon} alt="" className="warehouse-details__edit-icon"/>
                        </NavLink>

                <NavLink to={`/warehouses/` + warehouse.id + `/edit`} className="edit-link">
                    <div className="warehouse-details__edit-icon--tablet">
                    <img src={editIcon} alt="" />
                    <span>Edit</span>
                    </div>
                </NavLink>
                        
                    </div>
                    <div className='warehouse-details__container'>
                        <div className="warehouse-details__column">
                            <p className="warehouse-details__details-line">WAREHOUSE ADDRESS:</p>
                            <p className="warehouse-details__details-line">{warehouse.address},</p>
                            <p className="warehouse-details__details-line">{warehouse.city}, {warehouse.country}</p>
                        </div>
                        <div className="warehouse-details__contact-container">
                            <div className="warehouse-details__column">
                                <p className="warehouse-details__details-line">CONTACT NAME:</p>
                                <p className="warehouse-details__details-line">{warehouse.contact.name}</p>
                                <p className="warehouse-details__details-line">{warehouse.contact.position}</p>
                            </div>
                            <div className="warehouse-details__column">
                                <p className="warehouse-details__details-line">CONTACT INFORMATION:</p>
                                <p className="warehouse-details__details-line">{warehouse.contact.phone}</p>
                                <p className="warehouse-details__details-line">{warehouse.contact.email}</p>
                            </div>
                        </div> 
                    </div>

                </div>
            </div>
        )
    }

export default WarehouseDetails;