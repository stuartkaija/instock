import React from 'react';
import "./ItemForm.scss";

function ItemForm() {
    return (
        <form className="item-form">
            <section className="item-form__section">
                <h3 className="item-form__title">Item Details</h3>
                <label htmlFor="name" className="item-form__label">Item Name</label>
                <input 
                    type="text" 
                    name="name"
                    id="name"
                    className="item-form__input" 
                    placeholder="PLACEHOLDER"
                />
                <label htmlFor="description" className="item-form__label">Description</label>
                <input 
                    type="text"
                    name="description"
                    id="description"
                    className="item-form__input"
                    placeholder="PLACEHOLDER"
                />
                <label htmlFor="category" className="item-form__label">Category</label>
                <select name="category" id="category" className="item-form__input" >
                    <option value="Electronics">Electronics</option>
                    <option value="Gear">Gear</option>
                </select>
            </section>
            <section className="item-form__section">
            <h3 className="item-form__title">Item Availability</h3>
                <div className="item-form__radio-section">
                    <p className="item-form__label item-form__label--radio">Status</p>
                    <div className="item-form__radio-wrapper">
                        <input 
                            type="radio" 
                            id="InStock" 
                            name="InStock" 
                            value="InStock"
                            className="item-form__radio-button"
                        />
                        <label htmlFor="InStock">In stock</label>
                    </div>
                    <div className="item-form__radio-wrapper">    
                        <input 
                            type="radio" 
                            id="OutOfStock" 
                            name="OutOfStock" 
                            value="OutOfStock"
                            className="item-form__radio-button"
                        />
                        <label htmlFor="OutOfStock">Out of stock</label>
                    </div>
                </div>
                <label htmlFor="quantity" className="item-form__label">Quantity</label>
                <input 
                    type="number" 
                    name="quantity"
                    id="quantity"
                    className="item-form__input" 
                    placeholder="PLACEHOLDER"
                />
                <label htmlFor="warehouse" className="item-form__label">Warehouse</label>
                <input 
                    type="text" 
                    name="warehouse"
                    id="warehouse"
                    className="item-form__input" 
                    placeholder="PLACEHOLDER"
                />
                <div className="item-form__CTA-container">
                    <button className="item-form__button-secondary">Cancel</button>
                    <button className="item-form__button">PLACEHOLDER</button>
                </div>
            </section>
        </form>
        
    )
}

export default ItemForm;
