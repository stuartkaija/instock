import React from 'react'
import "./WarehouseListTable.scss";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

function WarehouseListTable() {
    return (
            <section className="warehouse-list">
                <div className="warehouse-container">
                    <div className="warehouse-column">
                        <div className="warehouse-column__item--title">Inventory Item</div>
                        <div className="warehouse-column__item-container">
                        <div className="warehouse-column__item--main">Television</div>
                        <img src={chevronRight} alt="chevron right" />
                        </div>

                        <div className="warehouse-column__item--title">Category</div>
                        <div className="warehouse-column__item">Electronics</div>
                    </div>
                    <div className="warehouse-column">
                        <div className="warehouse-column__item--title">Status</div>
                        <div className="warehouse-column__item--in-stock">In Stock</div>

                        <div className="warehouse-column__item--title">QTY</div>
                        <div className="warehouse-column__item">500</div>

                        <div className="warehouse-column__item--title">Warehouse</div>
                        <div className="warehouse-column__item">Manhattan</div>
                    </div>
                    <div className="warehouse-buttons">
                        {/* // These will likely be switched to NavLinks  */}
                        <img
                        className="warehouse-buttons__delete"
                        src={deleteIcon}
                        alt="delete-icon"
                        />
                        <img
                        className="warehouse-buttons__edit"
                        src={editIcon}
                        alt="edit-icon"
                        />
                    </div>
                </div>
            </section>
    )
}

export default WarehouseListTable
