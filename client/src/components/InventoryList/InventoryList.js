import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "react-modal";
import "./InventoryList.scss";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import closeIcon from "../../assets/icons/close-24px.svg";
import axios from "axios";

// import InventoryItemPage from "../../pages/InventoryItemPage/InventoryItemPage";

Modal.setAppElement("#root");

function InventoryList({ inventories, specificWarehouse }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState();
  const [itemId, setId] = useState();

  if (inventories === undefined) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <section className="inventory-list">
        {inventories.map((inventory) => {
          return (
            <div key={inventory.id} className="inventory-container">
              <div className="inventory-column">
                <div className="inventory-column__item--title">
                  Inventory Item
                </div>
                <div className="inventory-column__item-container">
                  <NavLink key={inventory.id} to={`/inventory/${inventory.id}`}>
                    <div className="inventory-column__item--main">
                      {inventory.itemName}
                    </div>
                  </NavLink>

                  <img src={chevronRight} alt="" />
                </div>

                <div className="inventory-column__item--title">Category</div>
                <div className="inventory-column__item">
                  {inventory.category}
                </div>
              </div>
              <div className="inventory-column">
                <div className="inventory-column__item--title">Status</div>
                <div
                  className={
                    inventory.status.includes("In")
                      ? "inventory-column__item--in-stock"
                      : "inventory-column__item--out-of-stock"
                  }
                >
                  {inventory.status}
                </div>

                <div className="inventory-column__item--title">QTY</div>
                <div className="inventory-column__item">
                  {inventory.quantity}
                </div>
                <div className={specificWarehouse ? "hidden" : ""}>
                  <div className="inventory-column__item--title">Warehouse</div>
                  <div className={"inventory-column__item"}>
                    {inventory.warehouseName}
                  </div>
                </div>

              </div>

              <div className="inventory-buttons">
                {/* // These will likely be switched to NavLinks  */}
                <img
                  onClick={() => {
                    setModalIsOpen(true);
                    setName(`${inventory.itemName}`);
                    setId(`${inventory.id}`);
                  }}
                  className="inventory-buttons__delete"
                  src={deleteIcon}
                  alt="delete-icon"
                />
                <NavLink to={"/inventory/" + inventory.id + "/edit"}>
                  <img
                    className="inventory-buttons__edit"
                    src={editIcon}
                    alt="edit-icon"
                  />
                </NavLink>
              </div>
            </div>
          );
        })}
      </section>

      <Modal
        object={inventories.map(
          (inventory) => inventory === inventory.itemName
        )}
        onAfterOpen={<div>Hi </div>}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="inventory-modal"
        overlayClassName="inventory-modal-overlay"
      >
        <img
          onClick={() => setModalIsOpen(false)}
          className="inventory-modal__close"
          src={closeIcon}
          alt=""
        />
        <h1> {`Delete Inventory ${name}  Item`}</h1>
        <span>
          {`Please confirm that you'd like to delete 
              ${name} from the inventory list. You won't be able to undo this action`}
        </span>
        <div className="inventory-modal__buttons">
          <button
            className="inventory-modal__buttons--cancel"
            onClick={() => setModalIsOpen(false)}
          >
            Cancel
          </button>
          <button
            className="inventory-modal__buttons--delete"
            onClick={() => {
              axios.delete(`http://localhost:8080/inventory/${itemId}`);
              alert("Item Successfully Deleted");
              window.location.href = "/inventory";
            }}
          >
            Delete
          </button>
        </div>
      </Modal>
    </>
  );
}

export default InventoryList;
