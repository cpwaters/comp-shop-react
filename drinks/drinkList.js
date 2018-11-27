import React from 'react'
import DrinkSummary from './drinkSummary'
import { Link } from 'react-router-dom'

const DrinkList = ({drinks}) => {
    console.log(drinks);
    return (
        <div>
            {drinks && drinks.map(drink =>{
                return (
                    <Link to={'/drinks/' + drink.id} key={drink.id}>
                        <DrinkSummary drink={drink} />
                    </Link>
                )
            })}
        </div>
    )

}

export default DrinkList