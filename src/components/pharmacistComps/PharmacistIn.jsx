import React from "react";
import Logo from "./erpharmtechgrayer.png";
import {Link} from "react-router-dom";

export class PharmacistIn extends React.Component {

    username;
    
    constructor(props) {
        super(props);
        this.username = localStorage['username']
    }

    render(){
        return (
            <div className = "body">
                <div className = "navBar">
                    <nav>
                        <div className = "img">
                            <img src={Logo} />
                        </div>
                    </nav>
                </div>
                <div className = "menu">
                    <button type = "button" id = "menuButton">Add <br/>Drug</button>
                    <button type = "button" id = "menuButton">Remove <br/>Drug</button>
                    <button type = "button" id = "menuButton">Request <br/>Drug</button>
                </div>
            </div>
        );
    }
}
