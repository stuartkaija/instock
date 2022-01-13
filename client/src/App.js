import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Component } from 'react'
import EditInvItem from "./components/EditInvItem/EditInvItem";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Header />
        <Switch>
          <Route exact path="/warehouses" />
          <Route path="/warehouses/warehouseId" component={WarehouseDetails} />
          <Route path="/inventory" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
