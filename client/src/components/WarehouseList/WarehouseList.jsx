import React from 'react';
import HeroWithSearch from '../HeroWithSearch/HeroWithSearch';
import TableHeader from '../TableHeader/TableHeader';
import "./WarehouseList.scss";

function WarehouseList() {
    return (
        <main className="warehouse-list__container">
            <HeroWithSearch />
            <TableHeader titles={["warehouse", "address", "contact name", "contact information", "actions"]}/>
            {/* <div className="warehouse-list__filter-bar-container">
                <div className="warehouse-list__table-header-container">
                    <h3 className="warehouse-list__table-header">
                        warehouse
                    </h3>
                    <img src={tableTitleIcon} alt="sort icon" className="warehouse-list__sort-icon" />
                </div>
                <div className="warehouse-list__table-header-container">
                    <h3 className="warehouse-list__table-header">
                        address
                    </h3>
                    <img src={tableTitleIcon} alt="sort icon" className="warehouse-list__sort-icon" />
                </div>
                <div className="warehouse-list__table-header-container">
                    <h3 className="warehouse-list__table-header">
                        contact name
                    </h3>
                    <img src={tableTitleIcon} alt="sort icon" className="warehouse-list__sort-icon" />
                </div>
                <div className="warehouse-list__table-header-container">
                    <h3 className="warehouse-list__table-header">
                        contact information
                    </h3>
                    <img src={tableTitleIcon} alt="sort icon" className="warehouse-list__sort-icon" />
                </div>
                <div className="warehouse-list__table-header-container">
                    <h3 className="warehouse-list__table-header">
                        actions
                    </h3>
                    <img src={tableTitleIcon} alt="sort icon" className="warehouse-list__sort-icon" />
                </div>
            </div> */}
        </main>
    )
}

export default WarehouseList
