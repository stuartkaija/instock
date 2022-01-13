import Header from "./components/Header/Header";
import Inventory from "./pages/Inventory/Inventory";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/warehouses" />
          <Route path="/inventory" component={Inventory} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
