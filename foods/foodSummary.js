import React from 'react'
import chic from '../../assets/foods/chicken-breast.jpg';

const FoodSummary = ({food}) => {
    return(
             <div className="list-comp">
                <img className="list-card-img" src={chic} alt={food.name} />
                <div className="list-card-quantity-packaging">{food.quantity} {food.package}</div>
                <div className="list-card-name">{food.name}</div>
                <div className="list-card-price">€{food.price}</div>
                <hr />
                <div className="list-card-type">{food.type}</div>                
                <div className="list-card-epos">{food.stock_number}</div>
                <button>ADD</button>
            </div>
    )
}

export default FoodSummary