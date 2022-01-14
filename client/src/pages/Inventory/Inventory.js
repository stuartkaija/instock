import { Component } from "react";
// import InventoryHeroWithSearch from "../../components/InventoryHeroWithSearch/";
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
        {/* <InventoryHeroWithSearch inventoryTitle={["Inventory"]} /> */}
        <Tableheader
          inventoryHeaders={[
            "Inventory Item",
            "Category",
            "Status",
            "QTY",
            "Warehouse",
            "Actions",
          ]}
        />
        <InventoryList inventories={this.state.inventory} />
      </>
    );
  }
}
export default Inventory;
