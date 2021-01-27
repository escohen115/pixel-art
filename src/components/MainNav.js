import { NavLink } from "react-router-dom";
import React from "react";
import Logo from "./pages/logo.png" ;


export default function MainNav({user}){
    return(
        <div className="div3">
            <div className="navlinks">
                <NavLink to="/" className="navLinks">Home</NavLink> 
                <NavLink to="/login" className="navLinks">Login</NavLink>
                {user? null:<NavLink to="/signup" className="navLinks">Sign Up</NavLink>}
                <NavLink to="/drawings"className="navLinks">See All Drawings</NavLink>  
                <img src={Logo} className="logo"></img>
            </div>
        </div>
    )
}