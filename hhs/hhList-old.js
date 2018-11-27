import React, { Component } from 'react';
import { connect } from 'react-redux';
import Eflag from '../../assets/comp-logo.png';
import { deleteHhold } from '../store/actions/postActions';

class HhDetail extends Component {
    handleClick = () => {
        this.props.deleteHh(this.props.hh.id); //this passes the individual album id into the deleteAlbum Action when the onClick is fired
        this.props.history.push('/hh') //this will redirect the page back to where you want it to
    }
    render(){
        const hh = this.props.hh ? (
            <div>
                <p>{this.props.hh}</p>
            </div>
        ) : (
            <div><img className="spin-loader" src={Eflag} alt="spinning company logo"/></div>
        )
        return(
            <div className="single-comp">
                <h4>{hh.name}</h4>
                <p>Quantity: {hh.quantity}</p>
                <p>Price: €{hh.price}</p>
                <div className="">
                    <button className="" onClick={this.handleClick}>Delete household item</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.hh_id;
    return {
        // eslint-disable-next-line
        hh: state.products.hhs.find(hh => hh.id == id) //expecting string not number
    }
     // tripple equals won't work if your id is a number instead of a string
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteHhold: (id) => { dispatch (deleteHhold(id)) } //fires the function and takes the param of id then dispatches the type and id to ethe rootReducer
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HhDetail)
//This is a Child component
//This is a functional / stateless / UI Component