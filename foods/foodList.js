import React from 'react'
import FoodSummary from './foodSummary'
import { Link } from 'react-router-dom'

const FoodList = ({foods, pics}) => {
    console.log(foods, pics);
    return (
        <div>
            {foods && foods.map(food =>{
                return (
                    <Link to={'/foods/' + food.id} key={food.id}>
                        <FoodSummary food={food} />
                    </Link>
                )
            })}
        </div>
    )

}

export default FoodList