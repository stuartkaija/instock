import React from 'react'
import WarehouseListColumn from "../WarehouseListColumn/WarehouseListColumn";
import "./WarehouseListTable.scss";

function WarehouseListTable({warehouses}) {
    console.log(warehouses)
    return (
            <section className="warehouses-list">
                {warehouses.map(warehouse => {
                    return <WarehouseListColumn 
                                key={warehouse.id}
                                id={warehouse.id}
                                name={warehouse.name}
                                address={warehouse.address}
                                city={warehouse.city}
                                country={warehouse.country}
                                contactName={warehouse.contact.name}
                                contactPhone={warehouse.contact.phone}
                                contactEmail={warehouse.contact.email}
                            />
                })}
            </section>
    )
}

export default WarehouseListTable
