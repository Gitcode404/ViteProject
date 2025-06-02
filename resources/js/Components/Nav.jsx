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
                    <MdLocationOn />
                    <p>Kolkata Bus stand</p>
                </div>
                <div className="nav-data">
                    <IoSearch />
                    <p>Search Food</p>
                    <div className="nav-data-login">
                        <IoPersonSharp />
                        <p>Login</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
