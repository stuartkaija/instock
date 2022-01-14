import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Component } from "react";
import Header from "./components/Header/Header";
import AddWarehouseForm from './pages/AddWarehouseForm/AddWarehouseForm';
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
          <Route path="/warehouses/add"  component={AddWarehouseForm}/>
          <Route path="/warehouses/:warehouseId" component={SpecificWarehousePage} />
          <Route path="/inventory" exact component={Inventory} />
          <Route path="/inventory/:itemId" component={InventoryItemPage}/>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
