import React from 'react';
import { Route, Redirect }  from 'react-router';

const Login = () =>{
    return (
        <div>
            <section className="login-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 login-sec">
                            <h2 className="text-center">Login Now</h2>
                            <form className="login-form">
                                <div className="form-group">
                                    <label for="exampleInputEmail1" className="text-uppercase">Username</label>
                                    <input type="text" className="form-control" placeholder=""></input>                    
                                </div>
                                <div className="form-group">
                                    <label className="text-uppercase">Password</label>
                                    <input type="password" className="form-control" placeholder=""></input>
                                </div>
                                <div className="form-check">                              
                                    <button type="submit" className="btn btn-login float-right">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-8 banner-sec">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">	    
                            </div>
                        </div>
                    </div>
                </div>                     
            </section>
        </div>     

    ); 
}
 
export default Login;