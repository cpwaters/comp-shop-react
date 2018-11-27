import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const DrinkDetails = (props) => {
    const {drink} = props;
    if (drink) {
        return (
            <div className="single-comp">
                <span className="title">{drink.name}</span>
                <div className="">
                    <p>Quantity: {drink.quantity} x 330ml cans</p>
                    <p>€{drink.price}</p>
                    <hr />
                    <p>epos:{drink.stock_number}</p>
                </div>            
            </div>
        )
    }else{
        return(
            <div>
                <p>Loading products...</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const drinks = state.firestore.data.drinks
    const drink = drinks ? drinks[id] : null
    return {
        drink: drink
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'drinks'
    }])
)(DrinkDetails)