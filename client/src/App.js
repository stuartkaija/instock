import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Component } from 'react'
import AddWarehouseForm from './components/AddWarehouseForm/AddWarehouseForm';
import EditInvItem from "./components/EditInvItem/EditInvItem";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Header />
        <Switch>
          <Route exact path="/warehouses" />
          <Route path="/warehouses/add"  component={AddWarehouseForm}/>
          <Route path="/inventory" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
