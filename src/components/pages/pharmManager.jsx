import React from "react";
import Logo from "./erpharmtechgrayer.png";
import Cart from "./cart.png";
import {Link} from "react-router-dom";

export class PharmManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // username: this.params.username,
        };
    }

    render() {
        return (
           <div className = "body">
               <div className = "navBar">
                <nav>
                    <div className = "img" id = "logo">
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <h1 className = "welcome">
                        Welcome back {this.props.username}!
                    </h1>
                    <Link to="/pharmManager/cart">
                        <button id = "cart" type="button">
                            View Cart
                                <img src={Cart} alt="Cart" id = "cartImg"/>
                        </button>
                    </Link> 
                </nav>
               </div>
               <div className = "menu">
                    <Link to ="/pharmManager/yourPharmacy"><button type = "button" id = "menuButton">Your<br />Pharmacy</button></Link>
                    <Link to ="/pharmManager/inventory"><button type = "button" id = "menuButton">View<br/>Inventory</button></Link>
                    <button type = "button" id = "menuButton">View<br/>Sales</button>
                    <button type = "button" id = "menuButton">Send<br /> Request</button>
               </div>
           </div>
        );
    }
}
