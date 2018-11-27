import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import DrinkList from '../drinks/drinkList';
import { Redirect } from 'react-router-dom';

class DrinkDash extends Component {
    render(){
        const { drinks, auth } = this.props;
        if (!auth.uid) return <Redirect to="/login" />
        return(
            <div className="card-content">
                <DrinkList drinks={drinks} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        drinks: state.firestore.ordered.drinks,
        auth: state.firebase.auth
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect(
        [{ collection : 'drinks' }]
    )
    )(DrinkDash)
