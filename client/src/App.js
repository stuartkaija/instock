import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Component } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import Inventory from "./pages/Inventory/Inventory";
import SpecificWarehousePage from "./pages/SpecificWarehousePage/SpecificWarehousePage";
import EditInvItemPage from "./pages/EditInvItemPage/EditInvItemPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/warehouses" exact component={WarehousesPage} />
          <Route path="/warehouses/:warehouseId" component={SpecificWarehousePage} />
          <Route path="/warehouses/warehouseId" component={WarehouseDetails} />
          <Route path="/inventory/:inventoryId/edit" component={EditInvItemPage} />
          <Route path="/inventory" component={Inventory} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
