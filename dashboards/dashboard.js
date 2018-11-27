import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import DrinkList from '../drinks/drinkList';
import FoodList from '../foods/foodList';
import HhList from '../hhs/hhList';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render(){
        const { drinks, foods, hhs, auth } = this.props;
        if (!auth.uid) return <Redirect to="/login" />
        return(
            <div className="card-content">
                <DrinkList drinks={drinks} />
                <FoodList foods={foods} />
                <HhList hhs={hhs} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        drinks: state.firestore.ordered.drinks,
        foods: state.firestore.ordered.foods,
        hhs: state.firestore.ordered.hhs,
        auth: state.firebase.auth
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect(
        [{ collection : 'drinks', orderBy: ['name', 'asc']},
        { collection : 'foods', orderBy: ['name', 'asc']},
        { collection : 'hhs', orderBy: ['name', 'asc']}]
    )
    )(Dashboard)
