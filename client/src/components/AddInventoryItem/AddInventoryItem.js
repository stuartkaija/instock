import axios from "axios";
import { Component } from "react";
import "./AddInventoryItem.scss";

// will need to add state in order to hide and show "quantity" input field

class AddInventoryItem extends Component {
  state = {
    addInventoryItem: [],
  };

  addInventoryItem = (event) => {
    event.preventDefault();

    let body = {
      itemName: event.target.itemName.value,
      description: event.target.description.value,
      category: event.target.category.value,
      status: event.target.status.value,
      quantity: event.target.quantity.value,
      warehouse: event.target.warehouse.value,
    };

    // POST request for new inventory items
    axios.post("http://localhost:8080/inventory", body).then((response) => {
      this.setState({ addInventoryItem: response.data });

      // ALERT to notify of successful upload
      alert("New Inventory Item Successfully Added");
      window.location.href = "/";
    });
  };

  render() {
    return (
      <form onSubmit={this.addInventoryItem} className="item-form">
        <div className="item-form__wrapper">
          <section className="item-form__section">
            <h3 className="item-form__title">Item Details</h3>
            <label
              htmlFor="itemName"
              htmlFor="name"
              className="item-form__label"
            >
              Item Name
            </label>
            <input
              type="text"
              name="name"
              id="itemName"
              className="item-form__input"
              placeholder="PLACEHOLDER"
            />
            <label htmlFor="description" className="item-form__label">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className="item-form__input item-form__input--textarea"
              placeholder="PLACEHOLDER"
            ></textarea>
            <label htmlFor="category" className="item-form__label">
              Category
            </label>
            <select name="category" id="category" className="item-form__input">
              <option value="Electronics">Electronics</option>
              <option value="Gear">Gear</option>
            </select>
          </section>
          <section className="item-form__section item-form__section--secondary">
            <h3 className="item-form__title">Item Availability</h3>
            <div className="item-form__radio-section">
              <p className="item-form__label item-form__label--radio">Status</p>
              <div className="item-form__radio-wrapper">
                <input
                  type="radio"
                  id="status"
                  name="radiobutton"
                  value="InStock"
                  className="item-form__radio-button"
                />
                <label htmlFor="InStock">In stock</label>
              </div>
              <div className="item-form__radio-wrapper">
                <input
                  type="radio"
                  id="status"
                  name="radiobutton"
                  value="OutOfStock"
                  className="item-form__radio-button"
                />
                <label htmlFor="OutOfStock">Out of stock</label>
              </div>
            </div>
            <div className="item-form__quantity-wrapper">
              <label htmlFor="quantity" className="item-form__label">
                Quantity
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                className="item-form__input"
                placeholder="PLACEHOLDER"
              />
            </div>
            <label htmlFor="warehouse" className="item-form__label">
              Warehouse
            </label>
            <input
              type="text"
              name="warehouse"
              id="warehouse"
              className="item-form__input"
              placeholder="PLACEHOLDER"
            />
          </section>
        </div>
        <div className="item-form__CTA-container">
          <button className="item-form__button-secondary">Cancel</button>
          <button className="item-form__button">PLACEHOLDER</button>
        </div>
      </form>
    );
  }
}

export default AddInventoryItem;
