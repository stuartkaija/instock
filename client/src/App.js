import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Component } from "react";
import Header from "./components/Header/Header";
import AddWarehouseForm from './components/AddWarehouseForm/AddWarehouseForm';
import EditInvItem from "./components/EditInvItem/EditInvItem";
import Footer from "./components/Footer/Footer";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import Inventory from "./pages/Inventory/Inventory";
import SpecificWarehousePage from "./pages/SpecificWarehousePage/SpecificWarehousePage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/warehouses/add"  component={AddWarehouseForm}/>
          <Route path="/warehouses" exact component={WarehousesPage} />
          <Route path="/warehouses/:warehouseId" component={SpecificWarehousePage} />
          <Route path="/inventory" exact component={Inventory} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
