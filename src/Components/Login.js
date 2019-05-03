import React, { Component } from 'react';
import { Route, Redirect }  from 'react-router';
import { FaUserAlt } from 'react-icons/fa';
import {FaLock} from 'react-icons/fa';

class Login extends Component{
    constructor (props) {
        super(props);
    }


    render(){
        return (
            <div id="login">
                <h1>Login</h1>
                <form>
                    <label>Email:</label>
                    <div className="form-row">
                        <FaUserAlt className="icon"></FaUserAlt>
                        <input type="email" require className="form-control" name="email" placeholder="Email"></input>
                    </div>
                    <label>Password:</label>
                    <div className="form-row">
                        <FaLock className="icon"></FaLock>
                        <input type="password" require className="form-control" name="password" placeholder="Password"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
            </div>
        )
    };

}
 

export default Login;