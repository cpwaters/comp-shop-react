import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import FoodList from '../foods/foodList';
import { Redirect } from 'react-router-dom';


class FoodDash extends Component {
    render(){
        const { foods, auth, pics } = this.props;
        if (!auth.uid) return <Redirect to="/login" />
        return(
            <div className="card-content wrapper">
                <FoodList foods={foods} pics={pics} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        foods: state.firestore.ordered.foods,
        auth: state.firebase.auth,
        pics: state.firebase.storage
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect(
        [{ collection : 'foods', orderBy: ['name', 'asc']}]
    )
    )(FoodDash)
