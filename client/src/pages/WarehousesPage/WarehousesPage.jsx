import React, { Component } from 'react';
import HeroWithSearch from "../../components/HeroWithSearch/HeroWithSearch";
import TableHeader from "../../components/TableHeader/TableHeader";
import WarehousesListTable from '../../components/WarehousesListTable/WarehousesListTable';

export default class WarehousesPage extends Component {
    render() {
        return (
            <main>
                <HeroWithSearch />
                <TableHeader titles={["warehouse", "address", "contact name", "contact information", "actions"]}/>
                <WarehousesListTable />
            </main>
        )
    }
}
