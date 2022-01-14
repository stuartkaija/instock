import React from 'react'
import InventoryItemHero from '../../components/InventoryItemHero/InventoryItemHero';
import "./InventoryItemPage.scss";

export default function InventoryItemPage() {
    return (
        <div>
           <InventoryItemHero />
            <div>
                <div className="inventory-item__columns">
                    <div>
                        <p className="inventory-item__text--title">ITEM DESCRIPTION</p>
                        <p className="inventory-item__text">This does not need to be upper case</p>
                    </div>
                    <div>
                        <p className="inventory-item__text--title">CATEGORY</p>
                        <p className="inventory-item__text">Electronics</p>
                    </div>
                </div>

                <div className="inventory-item__columns">
                    <div className="inventory-item__status-quantity-container">
                        <div className="inventory-item__status-quantity">
                            <p className="inventory-item__text--title" >STATUS</p>
                            <p className="inventory-item__text">Status button needed here from inventory</p>
                        </div>
                        <div className="inventory-item__status-quantity">
                            <p className="inventory-item__text--title">QUANTITY</p>
                            <p className="inventory-item__text">Electronics</p>
                        </div>
                    </div>
                    <div>
                        <p className="inventory-item__text--title">WAREHOUSE</p>
                        <p className="inventory-item__text">Electronics</p>
                    </div>
                </div>
            </div> 
        </div>
    )
}
