import React from "react";
import "./WarehouseListColumn.scss";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

function WarehouseListColumn({ name, address, city, country, contactName, contactPhone, contactEmail}) {
  return (
    <section className="warehouse-list">
      <div className="warehouse-column__main-container">
        <div className="warehouse-list__container">
          <div className="warehouse-column-container">
            <h4 className="warehouse-column__title">
                Warehouse
            </h4>
            <div className="warehouse-column__item-container">
              <h5 className="warehouse-column__text warehouse-column__text--link">
                  {name}
              </h5>
              <img src={chevronRight} alt="chevron right" />
            </div>

            <h4 className="warehouse-column__title">
              Address
            </h4>
            <address className="warehouse-column__text">
              {address}, {city}, {country}
            </address>
          </div>

          <div className="warehouse-column--secondary">
            <h4 className="warehouse-column__title">contact name</h4>
            <h5 className="warehouse-column__text">{contactName}</h5>
            <h4 className="warehouse-column__title">contact information</h4>
            <div className="warehouse-column__contact-container">
              <a href={`tel:${contactPhone}`} className="warehouse-column__text warehouse-column__text-link" >
                {contactPhone}
              </a>
              <a href={`mailto:${contactEmail}`} className="warehouse-column__text warehouse-column__text-link" >
              {contactEmail}
              </a>
            </div>
          </div>
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
