import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions'
 
const SignedInLinks = (props) => {

        return(
            <nav className="navbar">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    {/*<li><NavLink to="/dashboard">Groceries</NavLink></li>*/}
                    <li><NavLink to="/foodDash">Food</NavLink></li>
                    <li><NavLink to="/drinkDash">Drinks</NavLink></li>
                    <li><NavLink to="/hhDash">Household</NavLink></li>
                    <li><a onClick={props.signOut}>Log-out</a></li>
                </ul> 
            </nav>
        );
    }

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)