import React from "react";
import Logo from "./erpharmtechgrayer.png";
import Cart from "./cart.png";
import {Link} from "react-router-dom";

export class Manufacturer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "test",
        };
        // const { username } = this.props.match.params.username
    }

    render() {
        return (
           <div className = "body">
               <div className = "navBar">
                <nav>
                    <div className = "img">
                        <img src={Logo} />
                    </div>
                    <h1 className = "welcome">
                        Welcome back {this.state.username}!
                    </h1>
                </nav>
               </div>
               <div className = "menu">
                    <button type = "button" id = "menuButton">View<br />Available <br/>Medications</button>
                    <button type = "button" id = "menuButton">View<br/>Incoming <br/> Drugs</button>
                    <button type = "button" id = "menuButton">View<br/>Your <br/> Sales</button>
                    <button type = "button" id = "menuButton">View<br /> Manufacturer <br/> Information</button>
                    <button type = "button" id = "menuButton">View<br /> Drug <br/> Information</button>
               </div>
           </div>
        );
    }
}