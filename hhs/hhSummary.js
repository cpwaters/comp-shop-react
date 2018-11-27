import React from 'react'

const HhSummary = ({hh}) => {
    return(
             <div className="single-comp">
                
                <div>{hh.name}</div>
                <div>€{hh.price}</div>
                <div>{hh.quantity} {hh.package}</div>
                <div>{hh.type}</div>
                <hr />
                <div>EPOS Number {hh.stock_number}</div>
            </div>
    )
}

export default HhSummary