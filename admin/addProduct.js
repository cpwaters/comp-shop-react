import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { createProduct } from '../store/actions/productActions';
import { Redirect } from 'react-router-dom'

class AddProduct extends Component {
    state = {
        stock_number: '',
        name:'',
        quantity: '',
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
        this.props.createProduct(this.state)
        this.props.history.push('/')
    }
    render(){
        const { auth } = this.props;
        //if (!auth.uid) return <Redirect to="/admin" />
        return (
            <div className="add-product-form wrapper">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="stock_number">Product Stock Number</label><br></br>
                        <input type="text" id="stock_number" onChange={this.handleChange} value={this.state.stock_number}/><br></br>
                    <label htmlFor="name">Product</label><br></br>
                        <input type="text" id="name" onChange={this.handleChange} value={this.state.name}/><br></br>
                    <label htmlFor="quantity">Quantity</label><br></br>
                        <input type="text" id="quantity" onChange={this.handleChange} value={this.state.quantity}/><br></br>
                    <label htmlFor="price">Price</label><br></br>
                        <input type="text" id="price" onChange={this.handleChange} value={this.state.price}/><br></br>
                    <label htmlFor="type">Type</label><br></br>
                        <select>
                            <option>Select a type</option>
                            <option id="food" onChange={this.handleChange} value={this.state.price}>Food</option>
                            <option id="drink" onChange={this.handleChange} value={this.state.price}>Drink</option>
                            <option id="hhld" onChange={this.handleChange} value={this.state.price}>Household</option>
                        </select><br></br>
                    <input className="file-picker" type="file"></input><br></br>
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
        createProduct: (product) => dispatch(createProduct(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);