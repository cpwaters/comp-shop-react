import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSignedInLinks = () => {
        return(
            <nav className="navbar">
                <ul>
                    <NavLink to="/"><li>Home</li></NavLink>
                    {/*<NavLink to="/food"><li>Food</li></NavLink>
                    <NavLink to="/drinks"><li>Drinks</li></NavLink>
                    <NavLink to="/hh"><li>Household</li></NavLink>*/}
                    <NavLink to="/login"><li>Log-out</li></NavLink>
                    <NavLink to="/admin"><li>Admin</li></NavLink>
                    <NavLink to="/addproduct"><li>Add a product</li></NavLink>
                    <NavLink to=""><li>CW</li></NavLink>
                </ul> 
            </nav>
        );
    }

export default AdminSignedInLinks;