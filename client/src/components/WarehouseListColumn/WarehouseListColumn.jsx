import React from "react";
import "./WarehouseListColumn.scss";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import { Link } from "react-router-dom";

function WarehouseListColumn({ id, name, address, city, country, contactName, contactPhone, contactEmail}) {
  return (
    <section className="warehouse-list">

      <div className="warehouse-container">
        <div className="warehouse-column">
            <h4 className="warehouse-column__title">
                Warehouse
            </h4>
            <div className="warehouse-column__item-container">
              <Link className="warehouse-column__main-link" to={"/warehouses/" + id} >
                <h5 className="warehouse-column__text warehouse-column__text--link">{name}</h5>
              </Link>
              <img src={chevronRight} alt="chevron right" />
            </div>

            <h4 className="warehouse-column__title">
              Address
            </h4>
            <address className="warehouse-column__text">
              {address}, {city}, {country}
            </address>
        </div>

          <div className="warehouse-column">
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


          <div className="warehouse-buttons">
            <Link to={"/"} className="warehouse-column__link">
              <img
                className="warehouse-buttons__delete"
                src={deleteIcon}
                alt="delete-icon"
                />
            </Link>
            <Link to={"/"} className="warehouse-column__link">
              <img
                className="warehouse-buttons__edit"
                src={editIcon}
                alt="edit-icon"
                />
            </Link>
          </div>
        </div>
    </section>
  );
}

export default WarehouseListColumn;
