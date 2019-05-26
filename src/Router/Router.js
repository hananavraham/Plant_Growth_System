import React                                    from "react";
import {Route}                                  from 'react-router-dom';
import Home                                     from '../Components/Home';
import Header                                   from '../Components/Header';
import FooterPage                               from '../Components/Footer';
import BeginResearch                            from '../Components/BeginResearch';
import ResearchHistory                          from '../Components/ResearchHistory';
import ResearchPage                             from '../Components/ResearchPage';
import Login                                    from '../Components/Login';
import {PrivateRoute}                           from "../Components/PrivateRoute";


const ReactRouter = () =>{
    return (
        // <React.Fragment>
            <div>
                <Header></Header>
                    <Route exact path="/Login" component={Login}></Route>
                    <PrivateRoute exact path="/" component={Home}></PrivateRoute>
                    <PrivateRoute path='/Home' component={Home} name="Home"></PrivateRoute>
                    <PrivateRoute path='/BeginResearch' component={BeginResearch} name="Begin Research"></PrivateRoute>
                    <PrivateRoute path='/ResearchHistory' component={ResearchHistory} name="Research History"></PrivateRoute>
                    <PrivateRoute path='/ResearchPage' component={ResearchPage} name="Research Details"></PrivateRoute>                <FooterPage></FooterPage>                   
            </div>
        // </React.Fragment>
    );
}

export default ReactRouter;