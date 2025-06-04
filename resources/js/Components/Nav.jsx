import React from "react";
import "./Nav.css";
import Logo from "../assets/Logo.jpg";
import { MdLocationOn } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";

const Nav = () => {
    return (
        <>
            <div className="nav-main">
                <div className="nav-logo">
                    <img src={Logo}></img>
                </div>
                <div className="nav-mid">
                    <span>Deliver to:</span>
                    <p>Current Location</p>
                    <MdLocationOn className="nav-mid-lock" />
                    <p>Kolkata Bus stand</p>
                </div>
                <div className="nav-data">
                    <IoSearch className="nav-mid-lock nav-search" />
                    <p>Search Food</p>
                    <div className="nav-data-login">
                        <IoPersonSharp className="nav-mid-lock nav-person" />
                        <p>Login</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
