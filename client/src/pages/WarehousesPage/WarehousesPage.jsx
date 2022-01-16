import React, { Component } from 'react';
import axios from "axios";
import HeroWithSearch from "../../components/HeroWithSearch/HeroWithSearch";
import TableHeader from "../../components/TableHeader/TableHeader";
import WarehouseListTable from '../../components/WarehouseListTable/WarehouseListTable';

export default class WarehousesPage extends Component {
    state = {
        warehouseList: null,
    }

    componentDidMount() {
        document.title = "Warehouses"
        axios.get("http://localhost:8080/warehouses")
        .then((response) => {
          this.setState({
            warehouseList: response.data,
          })
        })
        .catch((error) => {
          console.log(error);
        })
    }

    render() {
      if(this.state.warehouseList === null) {
        return <div>loading...</div>
      }

        return (
            <main>
              <div className="main">
                <HeroWithSearch title={"Warehouses"}/>
                <TableHeader titles={["warehouse", "address", "contact name", "contact information", "actions"]}/>
                <WarehouseListTable warehouses={this.state.warehouseList}/>
              </div>  
            </main>
        )
    }
}
