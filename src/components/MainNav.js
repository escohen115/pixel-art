import { NavLink } from "react-router-dom";
import React from "react";
import Logo from "./pages/logo.png" ;


export default function MainNav({user, setUser, saved, setSaved}){

    function handleSignOut(){
        if(window.confirm("Are you sure you'd like to sign out?")){
            setUser(null)
            setSaved(!saved)
        }
    }

    return(
        <div className="div3">
            <div className="navlinks">
                <img src={Logo} className="logo" alt="logo"></img>
                {user?<NavLink to="/"className="navLinks" onClick={handleSignOut}>Sign Out</NavLink>:null}a
                <NavLink to="/drawings"className="navLinks">See All Drawings</NavLink>  
                {user? null:<NavLink to="/signup" className="navLinks" >Sign Up</NavLink>}
                {user? null:<NavLink to="/login" className="navLinks">Login</NavLink>}
                <NavLink to="/" className="navLinks">Home</NavLink> 
                
            </div>
        </div>
    )
}