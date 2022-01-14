import React from 'react'
import backImg from '/Users/brynfrayne/Desktop/instock/client/src/assets/icons/arrow_back-24px.svg'
import "./AddWarehouseForm.scss";
import { NavLink } from 'react-router-dom';
import { Component } from 'react';
import uniqid from 'uniqid'; 
import axios from 'axios';


export default class AddWarehouseForm extends Component {
    handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8080/warehouses', {
            name: event.target.name.value,
            address: event.target.address.value,
            city: event.target.city.value,
            country: event.target.country.value,
            contact: {
                name: event.target.contactName.value,
                position: event.target.position.value,
                phone: event.target.phone.value,
                email: event.target.email.value
            }
        })};
    
    render(){
   
    
    return (
        <div className="add-warehouse-form">
            <div className="add-form__header">
                
                <h2><NavLink to='/warehouses'><img className="add-warehouse-form__back-icon" src={backImg} alt="" /></ NavLink> Add New Warehouse</h2>
            </div>
            <form onSubmit={this.handleSubmit} id='addWarehouse'>
                <div className="warehouse__form">
                    <h3 className="add-warehouse-form__subtitle">Warehouse Details</h3>
                    <label className="add-warehouse-form__label">Warehouse Name</label>
                    <input className="add-warehouse-form__input" placeholder="Warehouse Name" name="name" id="name"></input>
                    <label className="add-warehouse-form__label">Street Address</label>
                    <input className="add-warehouse-form__input" placeholder="Street Address" name="address" id="address"></input>
                    <label className="add-warehouse-form__label">City</label>
                    <input className="add-warehouse-form__input" placeholder="City" name="city" id="city"></input>
                    <label className="add-warehouse-form__label">Country</label>
                    <input className="add-warehouse-form__input" placeholder="Country" name="country" id="country"></input>
                </div>
                <div className="warehouse__form">
                    <h3 className="add-warehouse-form__subtitle">Contact Details</h3>
                    <label className="add-warehouse-form__label">Contact Name</label>
                    <input className="add-warehouse-form__input" placeholder="Contact Name" name="contactName" id="contactName"></input>
                    <label className="add-warehouse-form__label">Position</label>
                    <input className="add-warehouse-form__input" placeholder="Position" name="position" id="position"></input>
                    <label className="add-warehouse-form__label">Phone Number</label>
                    <input className="add-warehouse-form__input" placeholder="Phone Number" name="phone" id="phone"></input>
                    <label className="add-warehouse-form__label">Email</label>
                    <input className="add-warehouse-form__input" placeholder="Email" name="email" id="email"></input>
                </div>
            </form>
            <div className="add-warehouse-form__button-container">
                <button className="add-warehouse-form__button">Cancel</button>
                <button className="add-warehouse-form__button add-warehouse-form__button--blue" form="addWarehouse">+ Add Warehouse</button>
            </div>
        </div>
    )
}}
