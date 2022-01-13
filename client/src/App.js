import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Component } from 'react'
import EditInvItem from "./components/EditInvItem/EditInvItem";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <Header />
        <Switch>
          <Route path="/warehouses" />
          <Route path="/inventory" />
        </Switch>
        <Footer />
      </BrowserRouter>
    )
  }
};

export default App;
