import "./InventoryList.scss";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

function InventoryList() {
  return (
    <>
      <section className="inventory-list">
        <div className="inventory-container">
          <div className="inventory-column">
            <div className="inventory-column__item--title">Inventory Item</div>
            <div className="inventory-column__item-container">
              <div className="inventory-column__item--main">Television</div>
              <img src={chevronRight} />
            </div>

            <div className="inventory-column__item--title">Category</div>
            <div className="inventory-column__item">Electronics</div>
          </div>
          <div className="inventory-column">
            <div className="inventory-column__item--title">Status</div>
            <div className="inventory-column__item--in-stock">In Stock</div>

            <div className="inventory-column__item--title">QTY</div>
            <div className="inventory-column__item">500</div>

            <div className="inventory-column__item--title">Warehouse</div>
            <div className="inventory-column__item">Manhattan</div>
          </div>
          <div className="inventory-buttons">
            {/* // These will likely be switched to NavLinks  */}
            <img className="inventory-buttons__delete" src={deleteIcon} />
            <img className="inventory-buttons__edit" src={editIcon} />
          </div>
        </div>
      </section>
    </>
  );
}

export default InventoryList;
