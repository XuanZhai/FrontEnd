import React from "react";
import Logo from "./erpharmtechgrayer.png";
import {Link} from "react-router-dom";

export class OutgoingOrder extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
           <div className = "body">
            <nav>
                <div className = "img" id = "logo">
                        <img src={Logo} />
                </div>
            </nav>
            <p>List of OutgoingOrder</p>
           </div>
        );
    }
}