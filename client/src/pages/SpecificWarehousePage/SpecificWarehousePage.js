import React, { Component } from 'react';
import HeroVanilla from '../../components/HeroVanilla/HeroVanilla';
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';
import TableHeader from '../../components/TableHeader/TableHeader';
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
          <div className="main">
              <WarehouseDetails warehouse={this.state.warehouse}/>
              <TableHeader titles={["warehouse", "address", "contact name", "contact information", "actions"]}/>
              <InventoryList inventories={this.state.inventory} />
          </div>
      )
    }
}

export default SpecificWarehousePage;