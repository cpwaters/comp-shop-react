import React from 'react'

const DrinkSummary = ({drink}) => {
    return(
             <div className="single-comp">
                <div>{drink.name}</div>
                <div>€{drink.price}</div>
                <div>{drink.quantity} {drink.package}</div>
                <div>{drink.type}</div>
                <hr />
                <div>EPOS Number: {drink.stock_number}</div>
            </div>
    )
}

export default DrinkSummary