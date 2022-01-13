import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Component } from 'react'
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Header />
        <Switch>
          <Route path="/warehouses" component={WarehousesPage} />
          <Route path="/inventory" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
