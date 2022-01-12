import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

function InventoryList() {
  return (
    <>
      <h1>Inventory List</h1>
      <div>
        <div>Inventory Item</div>
        <div>
          <div>Television</div>
          <img src={chevronRight} />
        </div>

        <div>Category</div>
        <div>Electronics</div>
      </div>
      <div>
        <div>Status</div>
        <div>In Stock</div>

        <div>QTY</div>
        <div>500</div>

        <div>Warehouse</div>
        <div>Manhatran</div>
      </div>

      <div>
        <img src={deleteIcon} />
        <img src={editIcon} />
      </div>
    </>
  );
}

export default InventoryList;
