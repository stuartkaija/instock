import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Component } from 'react'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Header />
        <Switch>
          <Route path="/warehouses" />
          <Route path="/inventory" />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
