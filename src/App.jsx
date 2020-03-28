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
import { Pharmacist } from './components/pages/pharmacist';
import { IncomingOrder, OutgoingOrder, ReceivedOrder, Prescription } from './components/pharmacistComps';
import { PharmacistIn } from './components/pharmacistComps';
import { ViewCart } from './components/pharmManagerComps/viewCart';
import { YourPharmacy, Inventory } from './components/pharmManagerComps';

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
                <Route exact path="/pharmManager/cart" ><ViewCart /></Route>
                <Route exact path="/pharmManager/yourPharmacy" ><YourPharmacy /></Route>
                <Route exact path="/pharmManager/inventory" ><Inventory /></Route>
            <Route exact path="/Manufacturer" ><Manufacturer /></Route>

            <Route exact path="/pharmacist" ><Pharmacist /></Route>
                <Route exact path="/pharmacist/IncomingOrder" ><IncomingOrder /></Route>
                <Route exact path="/pharmacist/OutgoingOrder" ><OutgoingOrder /></Route>
                <Route exact path="/pharmacist/ReceivedOrder" ><ReceivedOrder /></Route>
                <Route exact path="/pharmacist/Prescription" ><Prescription /></Route>
                <Route exact path="/pharmacist/PharmacistIn" ><PharmacistIn /></Route>

          </Switch>
        </Router>
      )
    }
}

export default App;
