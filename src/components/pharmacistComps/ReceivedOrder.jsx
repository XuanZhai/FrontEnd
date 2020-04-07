import React from "react";
import Logo from "./erpharmtechgrayer.png";
import {Link} from "react-router-dom";

export class ReceivedOrder extends React.Component {

    username;
    
    constructor(props) {
        super(props);
        this.username = localStorage['username']
    }
    render() {
        return (
           <div className = "body">
            <nav>
                <div className = "img" id = "logo">
                        <img src={Logo} alt="Logo" />
                </div>
            </nav>
            <p>List of ReceivedOrder</p>
           </div>
        );
    }
}