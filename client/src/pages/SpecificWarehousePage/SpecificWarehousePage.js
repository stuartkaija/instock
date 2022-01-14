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

    //  function to get correct video id from url   **not sure if this is necessary, waiting for main warehouse page list to be complete
    // getWarehouseId = () => {
    //     const warehouseId = this.state.warehouse.id;
    //     return warehouseId
    // };

      componentDidMount() {
        axios.get("http://localhost:8080/warehouses/5bf7bd6c-2b16-4129-bddc-9d37ff8539e9").then((response) => {
        this.setState({ 
          warehouse: response.data 
        })
      })
        .then( result => {
        axios.get('http://localhost:8080/inventory/5bf7bd6c-2b16-4129-bddc-9d37ff8539e9') // this is hardcoded right now, will have to change, likely to "this.props.match.params.warehouseId"
            .then((response) => {
                this.setState({
                    inventory: response.data
                });
            });
          });
        };

    render() {


      if (this.state.warehouse === null) {
        return <p>Choo chooo, Here We Go!!</p>
      }
        return (
            <div>
                <WarehouseDetails warehouse={this.state.warehouse}/>
                <InventoryList inventories={this.state.inventory} />
            </div>
        )
    }
}

export default SpecificWarehousePage;