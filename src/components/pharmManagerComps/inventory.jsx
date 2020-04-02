import React from "react";
import Logo from "./erpharmtechgrayer.png";
import {Link} from "react-router-dom";

export class Inventory extends React.Component {

    username; 
    constructor(props) {
        super(props);
        this.username = localStorage['username']
    }

    drugs = [{
        "name": "Symbyzide Parodafinil",
        "cost": 6,
        "units": 10
    },
    {
        "name": "Ibuprofen",
        "cost": 8,
        "units": 11
    },
    ]

    render() {
        return (
           <div className = "body">
                <nav>
                    <div className = "img" id = "logo">
                            <img src={Logo} alt="Logo"/>
                    </div>
                    <h1 className = "yourCart">
                            Inventory
                    </h1>
                </nav>
                <div className = "itemsTable">
                    <table>
                        <tr>
                            <th>Item</th>
                            <th>Units</th>
                            <th>Cost Per Unit</th>
                        </tr>
                            {this.drugs.map(item => (
                                <tr>
                                  <td id = "item">{item.name}
                                  </td>
                                  <td id = "item">
                                      {item.units}
                                    </td>

                                    <td id = "item">${item.cost}</td>
                                </tr>
                            ))}
                    </table>
                </div>
           </div>
        );
    }
}
