import React, { Component } from 'react';
import '../../App.css';
import { signUp } from '../store/actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Signup extends Component {
    state = {
        email:'',
        password:'',
        firstName:'',
        lastName:''
    }
    handleChange = (e) => {
       this.setState({
           [e.target.id]: e.target.value
       })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    render(){
        const { auth, authError } = this.props;
        if (auth.uid) return <Redirect to='/dashboard' />
            return (
                <div className="container">
                    <h4>Sign up</h4>
                    <p>This is the Sign up page</p>
                    <form onSubmit={this.handleSubmit} className="">
                        <div>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" id="firstName" onChange={this.handleChange} />
                        </div>  
                        <div>
                            <label htmlFor="lastName">Surname</label>
                            <input type="text" id="lastName" onChange={this.handleChange} />
                        </div> 
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange} />
                        </div>
                        <button>Sign Up</button>
                        { authError ? <p>{ authError }</p> : null }
                    </form>
                </div>
            );
        }
    }

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth, 
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup) 