import React from "react";
import Logo from "./erpharmtechgrayer.png";
//import Cart from "./cart.png";
import {Link} from "react-router-dom";

export class Doctor extends React.Component {

    username;
    
    constructor(props) {
        super(props);
        this.username = localStorage['username']
    }

    render() {
        return (
           <div className = "body">
               <div className = "navBar">
                <nav>
                    <div className = "img" id = "logo">
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <h1 className = "welcomeMan">
                        Welcome back {this.username}!
                    </h1>
                </nav>
               </div>
               <div className = "menu" id = "doctor">
                    <button type = "button" id = "manMenuButton">View<br />In-Stock<br/>Drugs</button>
                    <button type = "button" id = "manMenuButton">View<br/>Incoming<br/>Drugs</button>
                    <button type = "button" id = "manMenuButton">Search <br/>for a<br />Drug</button>
                    <button type = "button" id = "manMenuButton">View<br />Similar<br/>Drugs</button>
               </div>
           </div>
        );
    }
}











