import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';

class ResearchBox extends Component{
    constructor(props){
        super(props)

        this.state={
            renderResearch : null
        }

        this.GotoResearch = this.GotoResearch.bind(this);
    }

    GotoResearch(){
        this.setState({renderResearch : true});
    }

    render(){
        if (this.state.renderResearch){
            return (<Redirect to={{
                pathname: '/ResearchPage',
                state: {research :this.props.research} 
            }} />)
        }

        return(
            <div id="researchBox">
            <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css'></link>
                <img src={this.props.image}></img>
                <div>
                    <i onClick={this.GotoResearch} className='fas fa-cog'></i>
                    <h5>{this.props.name}</h5>
                    <article>{this.props.description}</article>
                    <p>
                        <label><i></i><i className='far fa-calendar-alt'></i></label>
                        <time>{this.props.date}</time>
                    </p>
                    
                    <span>
                        <h6>{this.props.status}</h6>
                    </span>
                </div>
            </div>
        )
    }
    
}


export default ResearchBox;