import React, { Component } from "react";
import { Route, Redirect } from 'react-router';
import ResearchBox from './ResearchBox';

// const Home  = () => {
 
class Home extends Component{

    constructor (props) {
        super(props);
        this.state ={
            BeginResearch: false,
            ResearchHistory: false
        }
    }
    
    render(){
        if (this.state.BeginResearch){
            return (<Redirect to={{
                pathname: '/BeginResearch'
            }} />)
        }

        if (this.state.ResearchHistory){
            return (<Redirect to={{
                pathname: '/ResearchHistory'
            }} />)
        }



    return (
        <div id="dashboard">
            <div className="input-group md-form form-sm form-1 pl-0">
                <div className="input-group-prepend">
                    <span className="input-group-text purple lighten-3" id="basic-text1"><i className="fas fa-search text-white"
                        aria-hidden="true"></i></span>
                </div>
                <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search"></input>>
            </div>
            <div id="boxes">
                <ResearchBox></ResearchBox>
                <ResearchBox></ResearchBox>
                <ResearchBox></ResearchBox>
                <ResearchBox></ResearchBox>
            </div>
        </div>
    )};
}

export default Home;