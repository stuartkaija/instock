import React from 'react'
import backImg from '/Users/brynfrayne/Desktop/instock/client/src/assets/icons/arrow_back-24px.svg'
import "./AddWarehouseForm.scss";
import { NavLink } from 'react-router-dom';

export default function AddWarehouseForm() {
    return (
        <div className="add-warehouse-form">
            <div className="add-form__header">
                
                <h2><NavLink to='/warehouses'><img className="add-warehouse-form__back-icon" src={backImg} alt="" /></ NavLink> Add New Warehouse</h2>
            </div>
            <form onSubmit={this.handleSubmit} id='editWarehouse'>
                <div className="warehouse__form">
                    <h3 className="add-warehouse-form__subtitle">Warehouse Details</h3>
                    <label className="add-warehouse-form__label">Warehouse Name</label>
                    <input className="add-warehouse-form__input" placeholder="Warehouse Name"></input>
                    <label className="add-warehouse-form__label">Street Address</label>
                    <input className="add-warehouse-form__input" placeholder="Street Address"></input>
                    <label className="add-warehouse-form__label">City</label>
                    <input className="add-warehouse-form__input" placeholder="City"></input>
                    <label className="add-warehouse-form__label">Country</label>
                    <input className="add-warehouse-form__input" placeholder="Country"></input>
                </div>
                <div className="warehouse__form">
                    <h3 className="add-warehouse-form__subtitle">Contact Details</h3>
                    <label className="add-warehouse-form__label">Contact Name</label>
                    <input className="add-warehouse-form__input" placeholder="Contact Name"></input>
                    <label className="add-warehouse-form__label">Position</label>
                    <input className="add-warehouse-form__input" placeholder="Position"></input>
                    <label className="add-warehouse-form__label">Phone Number</label>
                    <input className="add-warehouse-form__input" placeholder="Phone Number"></input>
                    <label className="add-warehouse-form__label">Email</label>
                    <input className="add-warehouse-form__input" placeholder="Email"></input>
                </div>
            </form>
            <div className="add-warehouse-form__button-container">
                <button className="add-warehouse-form__button">Cancel</button>
                <button className="add-warehouse-form__button add-warehouse-form__button--blue">+ Add Warehouse</button>

            </div>
        </div>
    )
}
