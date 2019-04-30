import React from 'react';
import { Route, Redirect }  from 'react-router';

const Login = () =>{
    return (
        <div>
            <form>
                <input type="text" className="form-control" id="formUserName" placeholder="User Name"></input>
                <input>Email:</input>
                <input type="password" className="form-control" id="formPassword" placeholder="Password"></input>
                <button type="submit" className="btn btn-primary">Sign In</button>
            </form>
        </div>

    ); 
}
 
export default Login;