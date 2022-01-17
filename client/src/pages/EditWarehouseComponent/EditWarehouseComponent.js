import React, { Component } from 'react'
import backImg from '../../assets/icons/arrow_back-24px.svg'
import "../EditWarehouseComponent/EditWarehouseComponent.scss";
import { NavLink } from 'react-router-dom';
import axios from 'axios';


export default class EditWarehouseComponent extends Component {

    state = {
        warehouse: null,
    }

    componentDidMount() {
        // axios call to get warehouse details
        axios.get("http://localhost:8080/warehouses/" + this.props.match.params.warehouseId)
            .then((response) => {
                this.setState({
                    warehouse: response.data
                });
            });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const validRegexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const validRegexPhone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
        
        if(event.target.phone.value) {
            if (!event.target.phone.value.match(validRegexPhone)) {
                return alert("Please enter valid phone number!")
            }
        }

        if(event.target.email.value) {
            if (!event.target.email.value.match(validRegexEmail)) {
                return alert("Please enter valid email: example@email.com");
            }    
        }

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
        })

        .then(alert('Warehouse Edited Successfully!'))
        .then(this.props.history.push("/warehouses/" + this.props.match.params.warehouseId))
        .catch((err) => {
            console.log(err)
        })
    }


    render() {
        if (this.state.warehouse === null) {
            return <p>Loading edit warehouse page...</p>
        }
        
        const { name, address, city, contact, country } = this.state.warehouse;

        return (
            <div className="main">
                <div className="edit-warehouse__header">
                    <h2><NavLink to={'/warehouses/' + this.state.warehouse.id}><img className="edit-warehouse__back-icon" src={backImg} alt="" /></ NavLink> Edit Warehouse</h2>
                </div>
                <form className="edit-warehouse__form-container" onSubmit={this.handleSubmit} id='editWarehouse'>
                    <div className="edit-warehouse__form edit-warehouse__form--left">
                        <h3 className="edit-warehouse__subtitle">Warehouse Details</h3>
                        <label className="edit-warehouse__label">Warehouse Name</label>
                        <input className="edit-warehouse__input" name="name" id="name" placeholder={name}></input>
                        <label className="edit-warehouse__label">Street Address</label>
                        <input className="edit-warehouse__input" name="address" id="address" placeholder={address}></input>
                        <label className="edit-warehouse__label">City</label>
                        <input className="edit-warehouse__input" name="city" id="city" placeholder={city}></input>
                        <label className="edit-warehouse__label">Country</label>
                        <input className="edit-warehouse__input" name="country" id="country" placeholder={country}></input>
                    </div>
                    <div className="edit-warehouse__form">
                        <h3 className="edit-warehouse__subtitle">Contact Details</h3>
                        <label className="edit-warehouse__label">Contact Name</label>
                        <input className="edit-warehouse__input" name="contactName" id="contactName" placeholder={contact.name}></input>
                        <label className="edit-warehouse__label">Position</label>
                        <input className="edit-warehouse__input" name="position" id="position" placeholder={contact.position}></input>
                        <label className="edit-warehouse__label">Phone Number</label>
                        <input className="edit-warehouse__input" name="phone" id="phone" placeholder={contact.phone}></input>
                        <label className="edit-warehouse__label">Email</label>
                        <input className="edit-warehouse__input" name="email" id="email" placeholder={contact.email}></input>
                    </div>
                </form>
                <div className='edit-warehouse__button-container'>
                    <NavLink className="edit-warehouse__button--navlink" to={'/warehouses/' + this.state.warehouse.id}>
                        <button className='edit-warehouse__button--cancel'>Cancel</button>
                    </NavLink>
                    <button className='edit-warehouse__button edit-warehouse__button--blue' form='editWarehouse'>Save</button>
                </div>
            </div>
        )
    }
}