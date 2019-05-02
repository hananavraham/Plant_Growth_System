import React, { Component } from "react";
import { Route, Redirect } from 'react-router';
import MultiSeriesGraph from './MultiSeriesGraph';
import {GetResearchPlants} from '../Utils/getResearches';

class ResearchPage extends Component{
    constructor(props){
        super(props)

        this.state={
            plants:[]
        }
        this.renderSelectPlant = this.renderSelectPlant.bind(this);
        this.showPlantRecords  = this.showPlantRecords.bind(this);
    }

    componentDidMount(){
        let jsonData = GetResearchPlants(this.props.location.state.research.Id);
        this.setState({ plants : jsonData.responseJSON});
    }

    renderSelectPlant() {
        const { plants} = this.state;
        let i = 0;
        return plants.map(plant => {
            ++ i;
          return (
            <option>{i}</option>
          )
        });
    }

    showPlantRecords(event){
        console.log("event:", event);
        /* need to show the current plant */
    }

    render(){
        return (
            <div id="researchPage">
                <h1>Research Report</h1>
                <article>
                    <i className='fas fa-paperclip'></i>
                    <h2>{this.props.location.state.research.Name}</h2>
                    <div className="line"></div>
                    <h3>{this.props.location.state.research.Description}</h3>
                    <div className="line"></div>.<div className="line"></div>
                </article>
                <div className="researchContent">
                    <button>Graph1</button>
                    <button>Graph2</button>
                    <button>Graph3</button>
                    <div className="form-group">
                        <label>Choose Plant</label>
                        <select onChange={this.showPlantRecords} className="form-control">
                            {this.renderSelectPlant()}
                        </select>                    
                    </div>
                    <input type="date" name="start_date"></input>
                    <input type="date" name="end_date"></input>
                    <MultiSeriesGraph plants={this.state.plants}/>
                </div>
                

            </div>
        );
    }

};




export default ResearchPage;