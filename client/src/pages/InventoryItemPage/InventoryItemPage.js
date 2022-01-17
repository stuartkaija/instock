import React from 'react'
import InventoryItemHero from '../../components/InventoryItemHero/InventoryItemHero';
import "./InventoryItemPage.scss";
import axios from 'axios';
import { Component } from 'react';

export default class InventoryItemPage extends Component{
    state = {
        item: null,
    };
  
    
    
    componentDidMount() {
        const id = this.props.match.params.itemId;
        console.log(id)
        axios.get('http://localhost:8080/inventory/'+id +'/item').then(response => {
        console.log(response.data)    
        this.setState({
            item:response.data,
        })

    })};
    render(){
    if (this.state.item === null) {
        return <span>Loading...</span>;
        }
    return (
        <div className="main">
           <InventoryItemHero  title={this.state.item.itemName} inventoryId={this.props.match.params.itemId}/>
            <div className="inventory-item">
                <div className="inventory-item__columns inventory-item__columns--left">
                    <div>
                        <p className="inventory-item__text--title">ITEM DESCRIPTION</p>
                        <p className="inventory-item__text">{this.state.item.description}</p>
                    </div>
                    <div>
                        <p className="inventory-item__text--title">CATEGORY</p>
                        <p className="inventory-item__text">{this.state.item.category}</p>
                    </div>
                </div>

                <div className="inventory-item__columns">
                    <div className="inventory-item__status-quantity-container">
                        <div className="inventory-item__status-quantity">
                            <p className="inventory-item__text--title" >STATUS</p>
                            <p className="inventory-item__text">{this.state.item.status}</p>
                        </div>
                        <div className="inventory-item__status-quantity">
                            <p className="inventory-item__text--title">QUANTITY</p>
                            <p className="inventory-item__text">{this.state.item.quantity}</p>
                        </div>
                    </div>
                    <div>
                        <p className="inventory-item__text--title">WAREHOUSE</p>
                        <p className="inventory-item__text">{this.state.item.warehouseName}</p>
                    </div>
                </div>
            </div> 
        </div>
    )
}}
