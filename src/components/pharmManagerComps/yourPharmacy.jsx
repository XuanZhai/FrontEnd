import React from "react";
import Logo from "./erpharmtechgrayer.png";
import {Link} from "react-router-dom";

export class YourPharmacy extends React.Component {

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
                <h1 className = "yourCart">
                        Your Pharmacy
                </h1>
                </nav>
           </div>
        );
    }
}