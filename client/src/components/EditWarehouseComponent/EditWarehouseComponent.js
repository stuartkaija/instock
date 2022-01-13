import React, { Component } from 'react'
import backImg from '../../assets/icons/arrow_back-24px.svg'
import "../EditWarehouseComponent/EditWarehouseComponent.scss";
import { NavLink } from 'react-router-dom';
import axios from 'axios';


export default class EditWarehouseForm extends Component {

    handleSubmit = (event) => {
        event.preventDefault();

        axios.put('http://localhost:8080/warehouses/:warehouseId', {
            id: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9", // hardcoded data, this should come from the page itself I think
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
        })

        // console.log(event)
    };

    render() {
        return (
            <div className="add-warehouse-form">
                <div className="add-form__header">
                    
                    <h2><NavLink to='/warehouses'><img className="add-warehouse-form__back-icon" src={backImg} alt="" /></ NavLink> Edit Warehouse</h2>
                </div>
                <form onSubmit={this.handleSubmit} id='editWarehouse'>
                    <div className="warehouse__form">
                        <h3 className="add-warehouse-form__subtitle">Warehouse Details</h3>
                        <label className="add-warehouse-form__label">Warehouse Name</label>
                        <input className="add-warehouse-form__input" name="name" id="name" placeholder="Warehouse Name"></input>
                        <label className="add-warehouse-form__label">Street Address</label>
                        <input className="add-warehouse-form__input" name="address" id="address" placeholder="Street Address"></input>
                        <label className="add-warehouse-form__label">City</label>
                        <input className="add-warehouse-form__input" name="city" id="city" placeholder="City"></input>
                        <label className="add-warehouse-form__label">Country</label>
                        <input className="add-warehouse-form__input" name="country" id="country" placeholder="Country"></input>
                    </div>
                    <div className="warehouse__form">
                        <h3 className="add-warehouse-form__subtitle">Contact Details</h3>
                        <label className="add-warehouse-form__label">Contact Name</label>
                        <input className="add-warehouse-form__input" name="contactName" id="contactName" placeholder="Contact Name"></input>
                        <label className="add-warehouse-form__label">Position</label>
                        <input className="add-warehouse-form__input" name="position" id="position" placeholder="Position"></input>
                        <label className="add-warehouse-form__label">Phone Number</label>
                        <input className="add-warehouse-form__input" name="phone" id="phone" placeholder="Phone Number"></input>
                        <label className="add-warehouse-form__label">Email</label>
                        <input className="add-warehouse-form__input" name="email" id="email" placeholder="Email"></input>
                    </div>
                </form>
                <div className='warehouse__buttons'>
                    <button>Cancel</button>
                    <button form='editWarehouse'>Save</button>
                </div>
            </div>
        )
    }
}