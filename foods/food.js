import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import chic from '../../assets/foods/chicken-breast.jpg';

const FoodDetails = (props) => {
    console.log(props);
    const {food} = props;
    if (food) {
        return (
            <div className="single-comp">
                <img className="single-card-img" src={chic} alt={food.name} />
                <div className="single-card-name">{food.name}</div>              
                <div className="single-card-quantity-package">{food.quantity} </div>
                <div className="single-card-price">€{food.price}</div>
                <hr />
                <div className="single-card-type">{food.type}</div>
                <div className="single-card-epos">{food.stock_number}</div>  
                <button>ADD TO BASKET</button>                     
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
    const foods = state.firestore.data.foods
    const food = foods ? foods[id] : null
    return {
        food: food
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'foods'
    }])
)(FoodDetails)