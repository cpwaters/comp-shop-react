import React, { Component } from 'react';
import '../../App.css';
import {connect} from 'react-redux'
import { signIn } from '../store/actions/authActions'

class Login extends Component {
    state = {
        email:'',
        password:''
    }
    handleChange = (e) => {
       this.setState({
           [e.target.id]: e.target.value
       })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render(){
        const { authError } = this.props
            return (
                <div className="container">
                    <h4>Login</h4>
                    <p>This is the Login page</p>
                    <form onSubmit={this.handleSubmit} className="">
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange} />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange} />
                        </div>
                        <button>Log-in</button>
                        <div>{ authError ? <p>{authError}</p> : null }</div> 
                    </form>
                </div>
            );
        }
    }

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)