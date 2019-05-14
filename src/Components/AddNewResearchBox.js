import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import {BeginResearch} from './BeginResearch';

class AddNewResearchBox extends Component{
    constructor(props){
        super(props)

        this.state={
            renderResearch : null
        }

        this.newResearchClick = this.newResearchClick.bind(this);
    }

    newResearchClick(){
        this.setState({goToNewResearch : true});
    }

    render(){
        if(this.state.goToNewResearch == true){
            return (<Redirect to={{
                pathname: '/BeginResearch',
                state: {userId :this.props.userId} 
            }} />)
        }
        return(
            <div id="researchBox">
                <div onClick={this.newResearchClick} class="plus">
                    <h3>+</h3>
                </div>
                <div>
                    <h5>Create New Research</h5>
                </div>
            </div>
        )
    }
    
}


export default AddNewResearchBox;