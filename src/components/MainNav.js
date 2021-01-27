import { NavLink, Link } from "react-router-dom";
import React from "react";
import Logo from "./pages/logo.png" ;


export default function MainNav({user, setUser, saved, setSaved}){

    function handleSignOut(){
        // confirm("Are you sure you'd like to sign out?")
        if(window.confirm("Are you sure you'd like to sign out?")){
            setUser(null)
            setSaved(!saved)
        }
    }

    return(
        <div className="div3">
            <div className="navlinks">
                <NavLink to="/" className="navLinks">Home</NavLink> 
                {user? null:<NavLink to="/login" className="navLinks">Login</NavLink>}
                {user? null:<NavLink to="/signup" className="navLinks" >Sign Up</NavLink>}
                {user?<NavLink to="/"className="navLinks" onClick={handleSignOut}>Sign Out</NavLink>:null}
                <NavLink to="/drawings"className="navLinks">See All Drawings</NavLink>  
                <img src={Logo} className="logo"></img>
                
            </div>
        </div>
    )
}