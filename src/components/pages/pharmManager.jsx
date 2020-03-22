import React from "react";
import Logo from "./erpharmtechgrayer.png";
import Cart from "./cart.png";
import {Link} from "react-router-dom";

export class PharmManager extends React.Component {

    constructor(props) {
        super(props);
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
                        Welcome back !
                    </h1>
                    <button id = "cart" type="button">
                    View Cart
                            <img src={Cart} id = "cartImg"/>
                            <p>$100</p>
                    </button>
                </nav>
               </div>
               <div className = "menu">
                    <button type = "button" id = "menuButton">Your<br />Pharmacy</button>
                    <button type = "button" id = "menuButton">View<br/>Inventory</button>
                    <button type = "button" id = "menuButton">View<br/>Sales</button>
                    <button type = "button" id = "menuButton">Send<br /> Request</button>
               </div>
           </div>
        );
    }
}