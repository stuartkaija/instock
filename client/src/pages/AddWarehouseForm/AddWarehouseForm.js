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
        
        const validRegexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const validRegexPhone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
        
        if (!event.target.name.value || !event.target.address.value || !event.target.city.value || !event.target.country.value || !event.target.contactName.value ||!event.target.position.value || !event.target.phone.value || !event.target.email.value ){
           return alert("Please fill in all values."); 
        };
        if (!event.target.phone.value.match(validRegexPhone)) {
            return alert("Please enter valid phone number!")
        }
        if (!event.target.email.value.match(validRegexEmail)) {
            return alert("Please enter valid email: example@email.com");
        } 
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
            
        }).then(response => {
            alert("Warehouse added 👌")
        }).then(response => {
            this.props.history.push('/warehouses');
        })
    };
    
    render(){
   
    
    return (
        <>
            <div className="add-warehouse__header">
                
                <h2><NavLink to='/warehouses'><img className="add-warehouse__back-icon" src={backImg} alt="" /></ NavLink> Add New Warehouse</h2>
            </div>
            <form onSubmit={this.handleSubmit} id='addWarehouse' className="add-warehouse__form-container">
                <div className="add-warehouse__form add-warehouse__form--left">
                    <h3 className="add-warehouse__subtitle">Warehouse Details</h3>
                    <label className="add-warehouse__label">Warehouse Name</label>
                    <input className="add-warehouse__input" required placeholder="Warehouse Name" name="name" id="name"></input>
                    <label className="add-warehouse__label">Street Address</label>
                    <input className="add-warehouse__input" required placeholder="Street Address" name="address" id="address"></input>
                    <label className="add-warehouse__label">City</label>
                    <input className="add-warehouse__input" required placeholder="City" name="city" id="city"></input>
                    <label className="add-warehouse__label">Country</label>
                    <input className="add-warehouse__input" required placeholder="Country" name="country" id="country"></input>
                </div>
                <div className="add-warehouse__form">
                    <h3 className="add-warehouse__subtitle">Contact Details</h3>
                    <label className="add-warehouse__label">Contact Name</label>
                    <input className="add-warehouse__input" required placeholder="Contact Name" name="contactName" id="contactName"></input>
                    <label className="add-warehouse__label">Position</label>
                    <input className="add-warehouse__input" required placeholder="Position" name="position" id="position"></input>
                    <label className="add-warehouse__label">Phone Number</label>
                    <input className="add-warehouse__input" required placeholder="Phone Number" name="phone" id="phone" type="phone"></input>
                    <label className="add-warehouse__label">Email</label>
                    <input className="add-warehouse__input"  placeholder="Email" name="email" id="email"   ></input>
                </div>
            </form>
            <div className="add-warehouse__button-container">
                <button className="add-warehouse__button">Cancel</button>
                <button className="add-warehouse__button add-warehouse__button--blue" form="addWarehouse">+ Add Warehouse</button>
            </div>
        </>
    )
}}
