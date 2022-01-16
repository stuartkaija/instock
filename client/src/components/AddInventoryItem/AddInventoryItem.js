import axios from "axios";
import { Component } from "react";
import "./AddInventoryItem.scss";
import uniqid from "uniqid";

// will need to add state in order to hide and show "quantity" input field

class AddInventoryItem extends Component {
  state = {
    addInventoryItem: [],
    warehouses: [],
  };

  componentDidMount() {
    axios.get("http://localhost:8080/inventory").then((response) => {
      this.setState({ warehouses: response.data });
    });
  }
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
    const mapped = this.state.warehouses.map(
      (warehouse, index) => warehouse.warehouseName
    );

    const filtered = mapped.filter(
      (warehouseName, index) => mapped.indexOf(warehouseName) === index
    );
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
              placeholder="Please enter a brief item description..."
            ></textarea>
            <label htmlFor="category" className="item-form__label">
              Category
            </label>
            <select
              name="category"
              id="category"
              placeholder="0"
              className="item-form__input"
            >
              <option value="Electronics">Electronics</option>
              <option value="Gear">Gear</option>
              <option value="Health">Health</option>
              <option value="Accessory">Accessory</option>
              <option value="Apparel">Apparel</option>
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
                  value="In Stock"
                  className="item-form__radio-button"
                />
                <label htmlFor="InStock">In stock</label>
              </div>
              <div className="item-form__radio-wrapper">
                <input
                  type="radio"
                  id="status"
                  name="radiobutton"
                  value="Out Of Stock"
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
                placeholder="0"
              />
            </div>
            <label htmlFor="warehouse" className="item-form__label">
              Warehouse
            </label>
            <select
              name="warehouse"
              id="warehouse"
              className="item-form__input"
            >
              {filtered.map((warehouse) => {
                return (
                  <option key={uniqid()} warehvalue="warehouses">
                    {warehouse}
                  </option>
                );
              })}
            </select>
          </section>
        </div>
        <div className="item-form__CTA-container">
          <button className="item-form__button-secondary">Cancel</button>
          <button className="item-form__button">+ Add Item</button>
        </div>
      </form>
    );
  }
}

export default AddInventoryItem;
