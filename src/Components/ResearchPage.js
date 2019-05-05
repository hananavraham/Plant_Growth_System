import React, { Component } from "react";
import { Route, Redirect } from 'react-router';
import MultiSeriesGraph from './MultiSeriesGraph';
import {GetResearchPlants} from '../Utils/getResearches';
import {FaCog} from 'react-icons/fa';

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
        if(plants != null){
            return plants.map(plant => {
                ++ i;
              return (
                <option>{i}</option>
              )
            });
        }
        
    }

    showPlantRecords(event){
        this.setState({selectedPlant: event.target.value -1});
        /* need to show the current plant */
    }

    render(){
        return (
            <div id="researchPage">
                <h1>Research Report</h1>
                <article>
                    <select><FaCog className="cogIcon" onClick=""></FaCog>
                        <option>Stop Research</option>
                        <option></option>
                        <option></option>
                    </select>
                    <i className='fas fa-paperclip'></i>
                    <h2>{this.props.location.state.research.Name}</h2>
                    <div className="line"></div>
                    <h3>{this.props.location.state.research.Description}</h3>
                    <div className="line"></div>.<div className="line"></div>
                </article>
                <article id="plantDetails">
                    <label>Status:</label><label>Running</label>
                    <label>Frequency_of_measurement</label><label>2 hours</label>
                    <label>Frequency_of_upload</label><label>2 hours</label>
                </article>
                <div className="researchContent">
                    <button>Graph1</button>
                    <button>Graph2</button>
                    <button>Graph3</button>
                    <div className="form-group">
                        <label>Choose Plant</label>
                        <select onChange={this.showPlantRecords} className="form-control">
                            <option></option>
                            {this.renderSelectPlant()}
                        </select>                    
                    </div>
                    <p>
                        <label>End Date</label>
                        <input type="date" name="start_date"></input>
                    </p>
                    <p>
                        <label>Start Date</label>
                        <input type="date" name="end_date"></input>
                    </p>
                    
                    <MultiSeriesGraph plants={this.state.plants} 
                                      selectedPlant={this.state.selectedPlant}/>
                </div>
                

            </div>
        );
    }

};




export default ResearchPage;