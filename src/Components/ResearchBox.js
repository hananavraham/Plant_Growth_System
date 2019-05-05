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

        return(
            <div id="researchBox">
                <img src={this.props.image}></img>
                <div>
                    <FaCog class="cogIcon" onClick={this.GotoResearch}></FaCog>
                    {/* <i onClick={this.GotoResearch} className='fas fa-cog'></i> */}
                    <h5>{this.props.name}</h5>
                    <article>{this.props.description}</article>
                    <p className="from-row">
                        <FaRegCalendarAlt className="icons"></FaRegCalendarAlt>
                        {/* <label><i></i><i className='far fa-calendar-alt'></i></label> */}
                        <time>{this.props.date}</time>
                        {/* <FaRegChartBar className="icons"></FaRegChartBar> */}
                    </p>
                    <h6>{this.props.status}</h6>
                </div>
            </div>
        )
    }
    
}


export default ResearchBox;