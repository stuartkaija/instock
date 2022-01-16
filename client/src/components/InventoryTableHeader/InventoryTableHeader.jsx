import React from "react";
import icon from "../../assets/icons/sort-24px.svg";
import "./InventoryTableHeader.scss";
import uniqid from "uniqid";

function InventoryTableHeader({ inventoryHeaders }) {
  const tableTitles = inventoryHeaders;
  return (
    <div className="table-header">
      {tableTitles.map((title) => {
        return (
          <div className="table-header__container" key={uniqid()}>
            <h3 className="table-header__title">{title}</h3>
            <img src={icon} alt="sort icon" />
          </div>
        );
      })}
    </div>
  );
}

export default InventoryTableHeader;
