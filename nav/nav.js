import React from 'react';
import SignedInLinks from './signedInLinks';
import SignedOutLinks from './signedOutLinks';
import { connect } from 'react-redux';

const Nav = (props) => {
    const {auth, profile} = props;
    const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;
        return(
            <nav className="navbar">
                <ul>
                    { links }
                </ul>
            </nav>
        );
    }

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}


export default connect(mapStateToProps)(Nav)
//Child component
//functional component can't use lifecycle hooks 