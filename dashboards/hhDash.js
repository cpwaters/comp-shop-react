import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux';
import HhList from '../hhs/hhList';
import { Redirect } from 'react-router-dom';

class HhDash extends Component {
    render(){
        const { hhs, auth } = this.props;
        if (!auth.uid) return <Redirect to="/login" />
        return(
            <div className="card-content">
                <HhList hhs={hhs} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        hhs: state.firestore.ordered.hhs,
        auth: state.firebase.auth
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect(
        [{ collection : 'hhs', orderBy: ['name', 'asc']}]
    )
    )(HhDash)
