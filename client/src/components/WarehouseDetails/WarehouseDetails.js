import React, { Component } from 'react'
import editIcon from '../../assets/icons/edit-24px--white.svg';
import backIcon from "../../assets/icons/arrow_back-24px.svg";
import "./WarehouseDetails.scss";

export default class WarehouseDetails extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="warehouse-details__hero">
                        <h1 className="hero__title"><img className="hero__icon" src={backIcon} alt="arrow back icon" /> King West</h1>
                        <img src={editIcon} alt="" className="warehouse-details__edit-icon"/>
                    </div>
                    <div className="warehouse-details__column">
                        <p className="warehouse-details__details-line">WAREHOUSE ADDRESS</p>
                        <p className="warehouse-details__details-line">469 King Street West,</p>
                        <p className="warehouse-details__details-line">Toronto, CAN</p>
                    </div>
                    <div className="warehouse-details__contact-container">
                        <div className="warehouse-details__column">
                            <p className="warehouse-details__details-line">CONTACT NAME</p>
                            <p className="warehouse-details__details-line">469 King Street West,</p>
                            <p className="warehouse-details__details-line">Toronto, CAN</p>
                        </div>
                        <div className="warehouse-details__column">
                            <p className="warehouse-details__details-line">CONTACT INFORMATION</p>
                            <p className="warehouse-details__details-line">469 King Street West,</p>
                            <p className="warehouse-details__details-line">Toronto, CAN</p>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}
