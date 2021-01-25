import { NavLink } from "react-router-dom";
import React from "react";

const linkStyles = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

export default function MainNav(){
    return(
        <div className="div3">
            <NavLink to="/" style={linkStyles}>Home</NavLink> 
            <NavLink to="/login" style={linkStyles}>Login</NavLink>
            <NavLink to="/signup" style={linkStyles}>Sign Up</NavLink> 
            <NavLink to="/drawings"style={linkStyles}>See All Drawings</NavLink>  
        </div>
    )
}