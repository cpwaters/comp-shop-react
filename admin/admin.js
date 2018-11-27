import React, { Component } from 'react';
import '../../App.css';

class Admin extends Component {
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
        console.log(this.state);
    }
    render(){
            return (
                <div className="container">
                    <h4>Admin Access</h4>
                    <p>This is the Admin page</p>
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
                    </form>
                </div>
            );
        }
    }
export default Admin;