import React, { Component } from 'react'
import axios from "axios";
import uniqid from "uniqid";
import "./ItemForm.scss";



export default class ItemForm extends Component {
    state = {
        warehouses: [],
        currentItem: null,
        isInStock: null,
    }

    componentDidMount() {
        document.title = "Edit Inventory Item"
        axios.get(`http://localhost:8080/inventory/${this.props.inventoryId}/item`)
            .then((response) => {
                this.setState({
                    currentItem: response.data,
                    isInStock: response.data.status === "In Stock" ? true : false,
                    stockValue: response.data.status
                })
            })
            .catch((err) => {
                console.log(err)
            });
        axios.get("http://localhost:8080/inventory")
            .then((response) => {
                this.setState({ warehouses: response.data, categories: response.data });
            })
    }

    handleSubmit = (event) => {
        axios.put(`http://localhost:8080/inventory/${this.props.inventoryId}`, {
            name: event.target.name.value,
            description: event.target.description.value,
            category: event.target.category.value,
            radioButton: event.target.radioButton.value,
            quantity: event.target.quantity.value || 0,
            warehouse: event.target.warehouse.value
        })
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    handleCancel = () => {
        window.location.reload();
    }

    handleRadio = () => {
        this.state.isInStock ? this.setState({isInStock: false, stockValue: "Out of Stock"}) : this.setState({isInStock: true, stockValue: "In Stock"});
    }

    render() {
        
        if(this.state.currentItem === null) {
            return <div>Loading...</div>
        }

        const mappedWarehouses = this.state.warehouses.map((warehouse) => warehouse.warehouseName);

        const filteredWarehouses = mappedWarehouses.filter((warehouseName, index) => mappedWarehouses.indexOf(warehouseName) === index);

        const mappedWarehousesCategory = this.state.warehouses.map((warehouse) => warehouse.category);
        
        const filteredWarehousesCategory = mappedWarehousesCategory.filter((category, index) => mappedWarehousesCategory.indexOf(category) === index);
        
        return (
            <form className="item-form" onSubmit={this.handleSubmit}>
            <div className="item-form__wrapper">
                <section className="item-form__section">
                    <h3 className="item-form__title">Item Details</h3>
                    <label htmlFor="name" className="item-form__label">Item Name</label>
                    <input 
                        type="text" 
                        name="name"
                        id="name"
                        className="item-form__input"
                        placeholder={this.state.currentItem.itemName}
                    />
                    <label htmlFor="description" className="item-form__label">Description</label>
                    <textarea 
                        name="description" 
                        id="description" 
                        className="item-form__input item-form__input--textarea"
                        placeholder={this.state.currentItem.description}>
                    </textarea>
                    <label htmlFor="category" className="item-form__label">Category</label>
                    <select name="category" id="category" className="item-form__input" >
                        {filteredWarehousesCategory.map((category) =>{
                        return( <option key={uniqid()} value={category}>{category}</option>)
                        })}
                    </select>
                </section>
                <section className="item-form__section item-form__section--secondary">
                <h3 className="item-form__title">Item Availability</h3>
                <div className="item-form__radio-section">
                                <p className="item-form__label item-form__label--radio">Status</p>
                                <div className="item-form__radio-wrapper">
                                    <input onChange={this.handleRadio} defaultChecked={!this.isInStock} type="radio" id="InStock" name="radioButton" value={this.state.stockValue} className="item-form__radio-button"/>
                                    <label htmlFor="InStock">In stock</label>
                                </div>
                                <div className="item-form__radio-wrapper">  
                                    <input onChange={this.handleRadio} defaultChecked={this.isInStock} type="radio" id="OutOfStock" name="radioButton" value={this.state.stockValue}  className="item-form__radio-button" />
                                    <label htmlFor="OutOfStock">Out of stock</label>
                                </div>
                            </div>
                    {this.state.isInStock
                        ?   <div className="item-form__quantity-wrapper">
                                <label htmlFor="quantity" className="item-form__label">Quantity</label>
                                <input 
                                    type="number" 
                                    name="quantity"
                                    id="quantity"
                                    className="item-form__input" 
                                    placeholder={this.state.currentItem.quantity}
                                />
                            </div>
                        :   " "
                    }
                    <label htmlFor="warehouse" className="item-form__label">Warehouse</label>
                    <select name="warehouse" id="warehouse" className="item-form__input" >
                        {filteredWarehouses.map((warehouse) => {
                            return(
                                <option key={uniqid()} value={warehouse} >
                                    {warehouse}
                                </option>
                            )
                        })}
                    </select>
                </section>
            </div>
                <div className="item-form__CTA-container">
                    <button onClick={this.handleCancel} name="secondary" className="item-form__button-secondary">Cancel</button>
                    <button type="submit"className="item-form__button">Save</button>
                </div>
        </form>
        )
    }
}
