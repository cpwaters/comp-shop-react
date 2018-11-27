import React from 'react'
import HhSummary from './hhSummary'
import { Link } from 'react-router-dom'

const HhList = ({hhs}) => {
    return (
        <div>
            {hhs && hhs.map(hh =>{
                return (
                    <Link to={'/hhs/' + hh.id} key={hh.id}>
                        <HhSummary hh={hh} />
                    </Link>
                )
            })}
        </div>
    )

}

export default HhList