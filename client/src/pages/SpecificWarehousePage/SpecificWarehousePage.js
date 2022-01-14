import React, { Component } from 'react';
import HeroVanilla from '../../components/HeroVanilla/HeroVanilla';
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';
import InventoryList from '../../components/InventoryList/InventoryList';
import axios from 'axios';

class SpecificWarehousePage extends Component {

    state = {
        warehouse: null,
        inventory: []
    }

    componentDidMount() {
        // axios call to get warehouse details
        axios.get('http://localhost:8080/inventory/5bf7bd6c-2b16-4129-bddc-9d37ff8539e9') // this is hardcoded right now, will have to change
            .then((response) => {
                console.log(response);
                this.setState({
                    inventory: response.data
                });
            });
    };

    render() {
        return (
            <div>
                <WarehouseDetails />
                <InventoryList inventories={this.state.inventory} />
            </div>
        )
    }
}

export default SpecificWarehousePage;