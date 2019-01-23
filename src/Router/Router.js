import React                                    from "react";
import {Route}                                  from 'react-router-dom';
import Home                                     from '../Components/Home';
import Plant                                    from '../Components/Plant';
import SideNav                                  from '../Components/SideNav';
import Header                                   from '../Components/Header';
import FooterPage                               from '../Components/Footer';
import BeginResearch                            from '../Components/BeginResearch';
import ResearchHistory                          from '../Components/ResearchHistory';
import Table                                    from '../Components/Table';



const ReactRouter = () =>{
    return (
        <React.Fragment>
            <div>
                <Header></Header>
                <SideNav></SideNav>
                    <Route path='/Plant' exact component={Plant} name="Plant Type"></Route>
                    <Route path='/Home' component={Home} name="Home"></Route>
                    <Route path='/Table' component={Table} name="Table"></Route>
                    <Route path='/BeginResearch' component={BeginResearch} name="Begin Research"></Route>
                    <Route path='/ResearchHistory' component={ResearchHistory} name="Research History"></Route>                
                <FooterPage></FooterPage>
            </div>
        </React.Fragment>
    );
}

export default ReactRouter;