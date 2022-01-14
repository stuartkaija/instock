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

    //  function to get correct video id from url
    // getWarehouseId = () => {
    //     console.log('no I can use const...')
    // };


      componentDidMount() {
        axios.get("http://localhost:8080/warehouses/5bf7bd6c-2b16-4129-bddc-9d37ff8539e9").then((response) => {
        this.setState({ 
          warehouse: response.data 
        })
      })
        .then( result => {
        axios.get('http://localhost:8080/inventory/5bf7bd6c-2b16-4129-bddc-9d37ff8539e9') // this is hardcoded right now, will have to change
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