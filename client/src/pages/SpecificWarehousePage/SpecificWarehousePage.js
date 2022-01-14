import React, { Component } from 'react';
import HeroVanilla from '../../components/HeroVanilla/HeroVanilla';
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';
import InventoryList from '../../components/InventoryList/InventoryList';

class SpecificWarehousePage extends Component {

    state = {
        warehouse: null,
        inventory: []
    }

    componentDidMount() {
        // axios call to get warehouse details
    }

    render() {
        return (
            <div>
                <HeroVanilla title={'King West Hardcoded'} />   {/* this needs to have state passed in as props for Warehouse title */}
                <WarehouseDetails />
                <InventoryList inventories={this.state.inventory} />
            </div>
        )
    }
}

export default SpecificWarehousePage;