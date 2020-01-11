import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink 
  } from "react-router-dom";
import './Navbar.css';
import Login from '../../pages/Login/Login';

export default class Navbar extends React.Component{
    render(){
        return( 
                <div className="navbar-section">
                    <div className="navbar-section-1">
                        <h1 className="text-black">CLASSY<span className="text-primary">ADS</span></h1>
                    </div>
                    <div className="navbar-section-2">
                        <NavLink exact={true} activeClassName="active" className="nav-link" to="/">Home</NavLink>
                        <NavLink activeClassName="active" className="nav-link" to="/login">Login</NavLink>
                        <NavLink activeClassName="active" className="nav-link" to="/register">Register</NavLink>
                        <button className="btn">+ Post an Ad</button>
                    </div>         
                </div>
        )
    }
} 