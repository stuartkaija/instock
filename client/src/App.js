import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Component } from 'react'
import EditInvItem from "./components/EditInvItem/EditInvItem";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Header />
       <EditInvItem />
        <Switch>
          <Route path="/warehouses" />
          <Route path="/inventory" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
