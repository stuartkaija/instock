import "./InventoryList.scss";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { NavLink } from 'react-router-dom';
// import InventoryItemPage from "../../pages/InventoryItemPage/InventoryItemPage";

function InventoryList({ inventories }) {
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

                <div className="inventory-column__item--title">Warehouse</div>
                <div className={"inventory-column__item"}>
                  {inventory.warehouseName}
                </div>
              </div>

              <div className="inventory-buttons">
                <NavLink to={"/"}>
                  <img
                    className="inventory-buttons__delete"
                    src={deleteIcon}
                    alt="delete-icon"
                  />
                </NavLink>
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
    </>
  );
}
export default InventoryList;
