import { Component } from "react";
import InventoryHeroWithSearch from "../../components/InventoryHeroWithSearch/InventoryHeroWithSearch";
import InventoryTableHeader from "../../components/InventoryTableHeader/InventoryTableHeader";
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
      <div className="main">
        <InventoryHeroWithSearch inventoryTitle={["Inventory"]} />
        <InventoryTableHeader
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
      </div>
    );
  }
}
export default Inventory;
