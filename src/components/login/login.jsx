import React from "react";
import Logo from "./pharmtechblue.png";
import {Link} from "react-router-dom";
import { PharmManager } from "../pages";

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginType: "",
            username: "",
        };
        this.findLoginType = this.findLoginType.bind(this);
        this.getUsername = this.getUsername.bind(this);
    }

    findLoginType(e) {
        this.setState({ loginType: e.target.value });
    }
    getUsername(e) {
        this.setState({ username: e.target.value });
    }

    render() {
        return (
            <div className = "base-container">
                <div className = "contents">
                    <div className = "img">
                        <img src={Logo} />
                    </div>
                    <div className="form">
                        <div className = "username" onChange={this.getUsername}>
                            <input type = "text" name="username" placeholder = "Username" id = "input"></input>
                        </div>
                        <div className = "password">
                            <input type = "password" name="password" placeholder = "Password" id = "input"></input>
                        </div>
                        <div className = "loginType">
                            <select id = "type" onChange={this.findLoginType}>
                                <option value = "default">Select an account type...</option>
                                <option value = "pharmManager">Pharmacy Manager</option>
                                <option value = "Manufacturer">Manufacturer</option>
                                <option value = "Pharmacist">Pharmacist</option>
                                <option value = "Doctor">Doctor</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    {(() => {
                    if (this.state.loginType === "pharmManager" && this.state.username) {
                        return (
                            <Link to={{pathname:"/pharmManager",
                             params: {username: this.state.username},
                             hash: this.state.username,}}><button type = "button" className="btn">Login</button></Link>
                        )
                    }
                    else if (this.state.loginType === "Manufacturer" && this.state.username) {
                        return (
                            <Link to={{pathname:"/Manufacturer",
                             params: {username: this.state.username},
                             hash: this.state.username,}}><button type = "button" className="btn">Login</button></Link>
                        )
                    }  
                    })()}
                </div>
                <div className = "registerHere">
                    <Link to="/register" >Register</Link>
                </div>
            </div>
        );
        
    }
}