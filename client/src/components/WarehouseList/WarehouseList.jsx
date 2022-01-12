import React from 'react';
import HeroWithSearch from '../HeroWithSearch/HeroWithSearch';
import TableHeader from '../TableHeader/TableHeader';
import "./WarehouseList.scss";

function WarehouseList() {
    return (
        <main className="warehouse-list__container">
            <HeroWithSearch />
            <TableHeader titles={["warehouse", "address", "contact name", "contact information", "actions"]}/>
        </main>
    )
}

export default WarehouseList
