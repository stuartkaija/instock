import React from "react";
import "./WarehouseListColumn.scss";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

function WarehouseListColumn({ name, address, city, country, contactName, contactPhone, contactEmail}) {
  return (
    <section className="warehouse-list">
      <div className="warehouse-container">
        <div className="warehouse-column">
          <h4 className="warehouse-column__item-title">
              Warehouse
          </h4>
          <div className="warehouse-column__item-container">
            <h5 className="warehouse-column__item--main">
                {name}
            </h5>
            <img src={chevronRight} alt="chevron right" />
          </div>

          <h5 className="warehouse-column__item-title">Address</h5>
          <address className="warehouse-column__item">{address}, {city}, {country}</address>
        </div>

        <div className="warehouse-column">
          <h4 className="warehouse-column__item-title">contact name</h4>
          <h5 className="warehouse-column__item">{contactName}</h5>
          <h4 className="warehouse-column__item-title">contact information</h4>
          <a href={`tel:${contactPhone}`}>
            {contactPhone}
          </a>
          <a href={`mailto:${contactEmail}`} className="warehouse-column__item" >
          {contactEmail}
          </a>
        </div>
        <div className="warehouse-buttons">
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
  );
}

export default WarehouseListColumn;
