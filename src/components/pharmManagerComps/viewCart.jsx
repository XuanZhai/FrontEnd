import React from "react";
import Logo from "./erpharmtechgrayer.png";
import {Link} from "react-router-dom";

export class ViewCart extends React.Component {

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
                        <tr>
                            <td id = "item">Symbyzide Parodafinil
                            <button type = "button" id = "swap">Swap</button>
                            </td>
                            <td id = "item">
                                <select id = "quantity">
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
                            <td id = "item">$18</td>
                        </tr>
                        <tr className = "lastRow">
                            <td>
                                <div className = "extraButtons">
                                    <button type = "button" id = "addItems">Add Items</button>
                                </div>
                            </td>
                            <td colSpan = "2">
                            <h3 id = "total">Total: $18</h3> <br/>
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