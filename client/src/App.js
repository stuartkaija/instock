import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Component } from 'react'
import EditInvItem from "./components/EditInvItem/EditInvItem";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import warehouseData from '../../server/data/warehouses.json';

class App extends Component {
  state: [

  ]

  
  render() {
    return (
      <BrowserRouter>
       <Header />
        <Switch>
          <Route path="/warehouses" exact component={WarehousesPage}/>
          <Route path="/warehouses/warehouseId" component={WarehouseDetails} />
          <Route path="/inventory" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
