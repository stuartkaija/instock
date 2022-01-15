import React, { Component } from 'react'
import backImg from '../../assets/icons/arrow_back-24px.svg'
import "../EditWarehouseComponent/EditWarehouseComponent.scss";
import { NavLink } from 'react-router-dom';
import axios from 'axios';


export default class EditWarehouseComponent extends Component {

    state = {
        warehouse: null,
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const warehouseId = this.state.warehouse.id

        axios.put('http://localhost:8080/warehouses/' + warehouseId, {
            id: warehouseId,
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
        }).then((response) => {
            console.log(response);
        });
    };

    componentDidMount() {
        // axios call to get warehouse details
        axios.get("http://localhost:8080/warehouses/" + this.props.match.params.warehouseId)
            .then((response) => {
                this.setState({
                    warehouse: response.data
                });
            });
    };

    componentDidUpdate() {
        // update to edited warehouse...maybe? not sure if this will be necessary
    };

    render() {
        if (this.state.warehouse === null) {
            return <p>Loading edit warehouse page...</p>
        }
        
        const { name, address, city, contact, country } = this.state.warehouse;

        return (
            <div className="add-warehouse-form">
                <div className="add-form__header">
                    
                    <h2><NavLink to={'/warehouses/' + this.state.warehouse.id}><img className="add-warehouse-form__back-icon" src={backImg} alt="" /></ NavLink> Edit Warehouse</h2>
                </div>
                <form onSubmit={this.handleSubmit} id='editWarehouse'>
                    <div className="warehouse__form">
                        <h3 className="add-warehouse-form__subtitle">Warehouse Details</h3>
                        <label className="add-warehouse-form__label">Warehouse Name</label>
                        <input className="add-warehouse-form__input" name="name" id="name" placeholder={name}></input>
                        <label className="add-warehouse-form__label">Street Address</label>
                        <input className="add-warehouse-form__input" name="address" id="address" placeholder={address}></input>
                        <label className="add-warehouse-form__label">City</label>
                        <input className="add-warehouse-form__input" name="city" id="city" placeholder={city}></input>
                        <label className="add-warehouse-form__label">Country</label>
                        <input className="add-warehouse-form__input" name="country" id="country" placeholder={country}></input>
                    </div>
                    <div className="warehouse__form">
                        <h3 className="add-warehouse-form__subtitle">Contact Details</h3>
                        <label className="add-warehouse-form__label">Contact Name</label>
                        <input className="add-warehouse-form__input" name="contactName" id="contactName" placeholder={contact.name}></input>
                        <label className="add-warehouse-form__label">Position</label>
                        <input className="add-warehouse-form__input" name="position" id="position" placeholder={contact.position}></input>
                        <label className="add-warehouse-form__label">Phone Number</label>
                        <input className="add-warehouse-form__input" name="phone" id="phone" placeholder={contact.phone}></input>
                        <label className="add-warehouse-form__label">Email</label>
                        <input className="add-warehouse-form__input" name="email" id="email" placeholder={contact.email}></input>
                    </div>
                </form>
                <div className='warehouse__buttons'>
                    <NavLink to={'/warehouses/' + this.state.warehouse.id}>
                        <button className='warehouse__buttons-cancel'>Cancel</button>
                    </NavLink>
                    <button className='warehouse__buttons-confirm' form='editWarehouse'>Save</button>
                </div>
            </div>
        )
    }
}