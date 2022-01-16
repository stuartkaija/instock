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
        // console.log(this.props.match.params.warehouseId);
        axios.get("http://localhost:8080/warehouses/" + this.props.match.params.warehouseId).then((response) => {
        this.setState({ 
          warehouse: response.data 
        })
      })
        .then( result => {
        axios.get('http://localhost:8080/inventory/' + this.props.match.params.warehouseId)
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
                <InventoryList inventories={this.state.inventory} specificWarehouse={this.props.match.params} />
            </div>
        )
    }
}

export default SpecificWarehousePage;