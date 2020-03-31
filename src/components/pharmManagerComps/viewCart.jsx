import React from "react";
import Logo from "./erpharmtechgrayer.png";
import {Link} from "react-router-dom";

export class ViewCart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 14,
            quantity: 0,
            drugs: [{
                "name": "Symbyzide Parodafinil",
                "cost": 6,
                "quantity": 0
            },
            {
                "name": "Ibuprofen",
                "cost": 8,
                "quantity": 0
            },
            ]
        }
        this.findTotal = this.findTotal.bind(this);
        this.findQuantity = this.findQuantity.bind(this);
    }

    findTotal(e, total) {
        this.setState({total: this.state.total + e.target.value});
    }
    findQuantity(e) {
        this.setState({quantity: e.target.value});
    }

    render() {
        return (
           <div className = "body">
            <nav>
                <div className = "img" id = "logo">
                        <img src={Logo} alt="Logo"/>
                </div>
                <h1 className = "yourCart">
                        Your Cart
                </h1>
                </nav>
                <div className = "itemsTable">
                    <table>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                            {this.state.drugs.map(item => (
                                <tr>
                                  <td id = "item">{item.name}
                                  <button type = "button" id = "swap">Swap</button>
                                  </td>
                                  <td id = "item">
                                <select id = "quantity" onChange={this.findQuantity}>
                                    <option value = "1">1</option>
                                    <option value = "2">2</option>
                                    <option value = "3">3</option>
                                    <option value = "4">4</option>
                                    <option value = "5">5</option>
                                    <option value = "6">6</option>
                                    <option value = "7">7</option>
                                    <option value = "8">8</option>
                                    <option value = "9">9</option>
                                </select>
                                    <button type = "button" id = "delete">Delete</button>
                                    </td>

                                    <td id = "item">${item.cost}</td>
                                </tr>
                            ))}
                        <tr className = "lastRow">
                            <td>
                                <div className = "extraButtons">
                                    <button type = "button" id = "addItems">Add Items</button>
                                </div>
                            </td>
                            <td colSpan = "2">
                            <h3 id = "total">Total: ${this.state.total}</h3> <br/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan = "3">
                                <div className = "extraButtons">
                                    <button type = "button" className = "placeOrder">Place Order</button>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
           </div>
        );
    }
}
