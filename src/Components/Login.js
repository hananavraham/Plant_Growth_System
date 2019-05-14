import React, { Component } from 'react';
import { Route, Redirect }  from 'react-router';
import { FaUserAlt } from 'react-icons/fa';
import {FaLock} from 'react-icons/fa';
import {CheckUser} from '../Utils/getUsers';


class Login extends Component{
    constructor (props) {
        super(props);

        this.state = {
            userId : null
        }
        this.checkUserAuth = this.checkUserAuth.bind(this);
    }

   
    render(){
        if(this.state.userId != null){
            return (<Redirect to={{
                pathname: '/Home',
                state: {userId :this.state.userId} 
            }} />)
        }
        
        return (
            <div id="login">
            <div id="response">
            </div>
                <h1>Login</h1>
                <form onSubmit={this.checkUserAuth}>
                    <label>Email:</label>
                    <div className="form-row">
                        <FaUserAlt className="icon"></FaUserAlt>
                        <input type="email" require className="form-control" ref="email" name="email" placeholder="Email"></input>
                    </div>
                    <label>Password:</label>
                    <div className="form-row">
                        <FaLock className="icon"></FaLock>
                        <input type="password" require className="form-control" ref="password" name="password" placeholder="Password"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
            </div>
        )
    };

    async checkUserAuth(event){
        event.preventDefault();
        let user = {
            email : this.refs.email.value,
            password : this.refs.password.value
        };
        var userId = await CheckUser(user);
        this.setState({userId : userId});
        localStorage.setItem('userId', userId);
    }
}
 

export default Login;