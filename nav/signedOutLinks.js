import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
        return(
            <nav className="navbar">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    {/*<li><NavLink to="/food">Food</NavLink></li>
                    <li><NavLink to="/drinks">Drinks</NavLink></li>
                    <li><NavLink to="/hh">Household</NavLink></li>*/}
                    <li><NavLink to="/login">Log-in</NavLink></li>
                    <li><NavLink to="/signup">Sign-up</NavLink></li>
                    <li><NavLink to="/admin">Admin</NavLink></li>
                </ul>
            </nav>
        );
    }

export default SignedOutLinks;