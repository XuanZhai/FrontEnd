import React from "react";
import Logo from "./erpharmtechgrayer.png";
import {Link} from "react-router-dom";

export class Mansales extends React.Component {

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
                        <img src={Logo} alt="Logo"/>
                </div>
                <h1 className = "yourCart">
                        Sales
                </h1>
                </nav>
                <h1 className = "tableHeader">Recent Sales</h1>
                <div className = "itemsTable">
                    <table>
                        <tr>
                            <th>Item</th>
                            <th>Units Sold</th>
                            <th>Cost Per Unit</th>
                            <th>Total Price</th>
                        </tr>
                    </table>
                </div>
                <h1 className = "tableHeader">All Sales</h1>
                <div className = "itemsTable">
                    <table>
                        <tr>
                            <th>Item</th>
                            <th>Units Sold</th>
                            <th>Cost Per Unit</th>
                            <th>Total Price</th>
                        </tr>
                    </table>
                </div>
                <h1 className = "tableHeader">Search
                <select id = "range">
                                    <option value = "0">Specify drug...</option>
                    </select></h1>
                <Link to="maninventory">
                    <button className = "return" id = "viewInventory">View All Inventory</button>
                    </Link> 
                <Link to="/manufacturer">
                    <button className = "return">Return to Homepage</button>
                    </Link> 
           </div>
        );
    }
}
