import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Component } from "react";
import Header from "./components/Header/Header";
import EditInvItem from "./components/EditInvItem/EditInvItem";
import Footer from "./components/Footer/Footer";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import Inventory from "./pages/Inventory/Inventory";
import AddInventoryItem from "./components/AddInventoryItem/AddInventoryItem";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/warehouses" exact component={WarehousesPage} />
          <Route path="/warehouses/warehouseId" component={WarehouseDetails} />
          <Route path="/inventory/AddNew" exact component={AddInventoryItem} />
          <Route path="/inventory" exact component={Inventory} />
          <Route path="/inventory/:inventoryId" exact component={Inventory} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
