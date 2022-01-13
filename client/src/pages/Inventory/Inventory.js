import { Component } from "react";
import HeroWithSearch from "../../components/HeroWithSearch/HeroWithSearch";
import Tableheader from "../../components/TableHeader/TableHeader";
import InventoryList from "../../components/InventoryList/InventoryList";
import axios from "axios";

class Inventory extends Component {
  state = {
    inventory: [],
  };

  componentDidMount() {
    axios.get("http://localhost:8080/inventory").then((response) => {
      this.setState({ inventory: response.data });
    });
  }
  render() {
    return (
      <>
        <h1>Inventory List</h1>
        <HeroWithSearch />
        {/* <Tableheader /> */}
        <InventoryList inventories={this.state.inventory} />
      </>
    );
  }
}
export default Inventory;
