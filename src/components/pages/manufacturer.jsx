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
                    <div className = "img" id = "logo">
                        <img src={Logo} />
                    </div>
                    <h1 className = "welcomeMan">
                        Welcome back {this.state.username}!
                    </h1>
                </nav>
               </div>
               <div className = "menu" id = "manufacturer">
                    <button type = "button" id = "manMenuButton">View<br />Available <br/>Medications</button>
                    <button type = "button" id = "manMenuButton">View<br/>Incoming <br/> Drugs</button>
                    <button type = "button" id = "manMenuButton">View<br/>Your <br/> Sales</button>
                    <button type = "button" id = "manMenuButton">View<br /> Manufacturer <br/> Information</button>
                    <button type = "button" id = "manMenuButton">View<br /> Drug <br/> Information</button>
               </div>
           </div>
        );
    }
}