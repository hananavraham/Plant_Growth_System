import React, { Component } from 'react';
import { Route, Redirect }  from 'react-router';
import { FaUserAlt } from 'react-icons/fa';
import {FaLock} from 'react-icons/fa';
import {CheckUser} from '../Utils/getUsers';
import Noty from 'noty';

class Login extends Component{
    constructor (props) {
        super(props);

        this.state = {
            userId : null
        }
        this.checkUserAuth = this.checkUserAuth.bind(this);
    }

   
    render(){
        if(this.state.userId != null && this.state.userId != 'error'){
            return (<Redirect to={{
                pathname: '/Home',
                state: {userId :this.state.userId} 
            }} />)
        }

        else if(this.state.userId == 'error') {
                new Noty({
                    type: 'error',
                    layout: 'topRight',
                    text: 'Wrong User name or Password',
                    timeout: 3000
                }).show();
        }

        
        return (
            <div id="login">
                <h1>Login</h1>
                <form onSubmit={this.checkUserAuth}>
                    <article>
                        <label>Email:</label>
                        <div className="form-row">
                            <FaUserAlt className="icon"></FaUserAlt>
                            <input type="email" require className="form-control" ref="email" name="email" placeholder="Email"></input>
                        </div>
                    </article>
                    <article>
                        <label>Password:</label>
                        <div className="form-row">
                            <FaLock className="icon"></FaLock>
                            <input type="password" require className="form-control" ref="password" name="password" placeholder="Password"></input>
                        </div>                        
                    </article>

                    
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
        try{
            var userId = await CheckUser(user);
            localStorage.setItem('userId', userId);
            this.setState({userId : userId});     
        }

        catch{
            this.setState({userId : 'error'});   
        }
        
        
    }
}
 

export default Login;