import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import {FaCog} from 'react-icons/fa';
import {FaRegCalendarAlt} from 'react-icons/fa';

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
        const styles = {
            container: {
                color: null
            }
        };
        if (this.props.status == 'Pending'){
            styles.container.color = '#ac6236';
        }
        else{
            styles.container.color = '#36ac4d';
        }
        return(
            <div id="researchBox">
                <img src={this.props.image}></img>
                <div>
                    <FaCog class="cogIcon" onClick={this.GotoResearch}></FaCog>
                    <h5>{this.props.name}</h5>
                    <article>{this.props.description}</article>
                    <p className="from-row">
                        <FaRegCalendarAlt className="icons"></FaRegCalendarAlt>
                        <time>{this.props.date}</time>
                    </p>
                    <h6 style={styles.container}>{this.props.status}</h6>
                </div>
            </div>
        )
    }
    
}


export default ResearchBox;