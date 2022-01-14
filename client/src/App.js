import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Component } from "react";
import Header from "./components/Header/Header";
import EditInvItem from "./components/EditInvItem/EditInvItem";
import Footer from "./components/Footer/Footer";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import Inventory from "./pages/Inventory/Inventory";
import InventoryItemPage from "./pages/InventoryItemPage/InventoryItemPage";
import SpecificWarehousePage from "./pages/SpecificWarehousePage/SpecificWarehousePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/warehouses" exact component={WarehousesPage} />
          <Route path="/inventory" exact component={Inventory} />
          <Route path="/inventory/:inventoryId" component={InventoryItemPage}/>
          <Route path="/warehouses/:warehouseId" component={SpecificWarehousePage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
