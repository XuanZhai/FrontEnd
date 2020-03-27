import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { Login } from "./components/login"
import { Register } from "./components/login"
import { PharmManager } from "./components/pages"
import { Manufacturer } from './components/pages/manufacturer';
import { ViewCart } from './components/pharmManagerComps/viewCart';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      }
    }

    render () {
      return (
        <Router>
          <Switch>
            <Route exact path="/login" ><Login /></Route>
            <Route exact path="/register"><Register /></Route>
            <Route exact path="/pharmManager" ><PharmManager /></Route>
                <Route exact path="/pharmManager/viewCart" ><ViewCart /></Route>
            <Route exact path="/Manufacturer" ><Manufacturer /></Route>
          </Switch>
        </Router>
      )
    }
}

export default App;
