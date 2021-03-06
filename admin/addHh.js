import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { createHh } from '../store/actions/hhActions';
import { Redirect } from 'react-router-dom'

class AddHh extends Component {
    state = {
        stock_number: '',
        name:'',
        quantity: '',
        package: '',
        price: '',
        type:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value           
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createHh(this.state)
        this.props.history.push('/')
    }
    render(){
        const { auth } = this.props;
        //if (!auth.uid) return <Redirect to="/admin" />
        return (
            <div className="add-product-form wrapper">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="stock_number">EPOS Product Stock Number</label><br></br>
                        <input type="text" id="stock_number" onChange={this.handleChange} value={this.state.stock_number}/><br></br>
                    <label htmlFor="name">Product</label><br></br>
                        <input type="text" id="name" onChange={this.handleChange} value={this.state.name}/><br></br>
                    <label htmlFor="quantity">Quantity</label><br></br>
                        <input type="text" id="quantity" onChange={this.handleChange} value={this.state.quantity}/><br></br>
                    <label htmlFor="package">Package type</label><br></br>
                        <input type="text" id="package" onChange={this.handleChange} value={this.state.package}/><br></br>
                    <label htmlFor="price">Price</label><br></br>
                        <input type="text" id="price" onChange={this.handleChange} value={this.state.price}/><br></br>
                    <label htmlFor="type">Type</label><br></br>
                        <input type="text" id="type" onChange={this.handleChange} value={this.state.type}/><br></br>
                        <br></br>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createHh: (hh) => dispatch(createHh(hh))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddHh);