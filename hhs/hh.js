import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const HhDetails = (props) => {
    const {hh} = props;
    if (hh) {
        return (
            <div className="single-comp">
                <span className="title">{hh.name}</span>
                <div className="">
                    <p>Quantity: {hh.quantity} </p>
                    <p>€{hh.price}</p>
                    <hr />
                    <p>epos:{hh.stock_number}</p>
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
    const hhs = state.firestore.data.hhs
    const hh = hhs ? hhs[id] : null
    return {
        hh: hh
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'hhs'
    }])
)(HhDetails)