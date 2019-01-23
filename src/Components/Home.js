import React, { Component } from "react";
import { Route, Redirect } from 'react-router';

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
        <div className="home">              
            <div id= "home">
                <button type="button" className="btn btn-primary btn-lg" onClick={()=>{
                    {this.setState({BeginResearch:true})}
                    }}>Begin Research
                </button>
                <button type="button" className="btn btn-secondary btn-lg"onClick={()=>{
                    {this.setState({ResearchHistory:true})}
                    }}> Research History
                </button>
            </div>            
        </div>
    )};
}

export default Home;