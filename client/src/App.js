import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import Inventory from "./pages/Inventory/Inventory";
import AddInventoryItem from "./components/AddInventoryItem/AddInventoryItem";
import InventoryItemPage from "./pages/InventoryItemPage/InventoryItemPage";
import SpecificWarehousePage from "./pages/SpecificWarehousePage/SpecificWarehousePage";
import EditWarehouseComponent from "./components/EditWarehouseComponent/EditWarehouseComponent";
import EditInvItemPage from "./pages/EditInvItemPage/EditInvItemPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/warehouses" exact component={WarehousesPage} />
          <Route path="/warehouses/:warehouseId" exact component={SpecificWarehousePage} />
          <Route path="/warehouses/:warehouseId/edit" component={EditWarehouseComponent} />
          <Route path="/inventory/:inventoryId/edit" component={EditInvItemPage} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/inventory/AddNew" exact component={AddInventoryItem} />
          <Route path="/inventory" exact component={Inventory} />
          <Route path="/inventory/:itemId" component={InventoryItemPage}/>
          <Route path="/warehouses/:warehouseId" component={SpecificWarehousePage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
