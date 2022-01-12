import React from 'react'
import backImg from '/Users/brynfrayne/Desktop/instock/client/src/assets/icons/arrow_back-24px.svg'
import { NavLink } from 'react-router-dom';

export default function AddWarehouseForm() {
    return (
        <div>
            <div className="add-form__header">
                <img src={backImg} alt="" />
                <h2>Add New Warehouse</h2>
            </div>
            <div>
                <h3>Warehouse Details</h3>
                <label>Warehouse Name</label>
                <input></input>
                <label>Street Address</label>
                <input></input>
                <label>City</label>
                <input></input>
                <label>Country</label>
                <input></input>
            </div>
            <div>
                <h3>Contact Details</h3>
                <label>Contact Name</label>
                <input></input>
                <label>Position</label>
                <input></input>
                <label>Phone Number</label>
                <input></input>
                <label>Email</label>
                <input></input>
            </div>
            <div>
                <NavLink>Cancel</NavLink>
                <NavLink>+ Add Warehouse</NavLink>

            </div>
        </div>
    )
}
