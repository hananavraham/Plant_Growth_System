import React                                    from "react";
import {Route}                                  from 'react-router-dom';
import Home                                     from '../Components/Home';
import Header                                   from '../Components/Header';
import FooterPage                               from '../Components/Footer';
import BeginResearch                            from '../Components/BeginResearch';
import ResearchHistory                          from '../Components/ResearchHistory';
import ResearchPage                             from '../Components/ResearchPage';
import Login                                    from '../Components/Login';



const ReactRouter = () =>{
    return (
        <React.Fragment>
            <div>
                <Header></Header>
                    <Route path='/Home' component={Home} name="Home"></Route>
                    <Route path='/Login' component={Login} name="Login"></Route>
                    <Route path='/BeginResearch' component={BeginResearch} name="Begin Research"></Route>
                    <Route path='/ResearchHistory' component={ResearchHistory} name="Research History"></Route>
                    <Route path='/ResearchPage' component={ResearchPage} name="Research Details"></Route>
                <FooterPage></FooterPage>                   
            </div>
        </React.Fragment>
    );
}

export default ReactRouter;