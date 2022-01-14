import { Component } from "react";
import HeroWithSearch from "../../components/HeroWithSearch/HeroWithSearch";
import TableHeader from "../../components/TableHeader/TableHeader";
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
        <TableHeader titles={["warehouse", "address", "contact name", "contact information", "actions", "QTY"]}/>
        <InventoryList inventories={this.state.inventory} />
      </>
    );
  }
}
export default Inventory;
