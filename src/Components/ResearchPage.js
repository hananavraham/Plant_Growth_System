import React, { Component } from "react";
import { Route, Redirect } from 'react-router';
import MultiSeriesGraph from './MultiSeriesGraph';
import {GetResearchPlants} from '../Utils/getResearches';
import {FaCog} from 'react-icons/fa';
import $ from "jquery";

class ResearchPage extends Component{
    constructor(props){
        super(props)

        this.state={
            plants:[],
            research : {}
        }
        this.renderSelectPlant = this.renderSelectPlant.bind(this);
        this.showPlantRecords  = this.showPlantRecords.bind(this);
        this.showOption = this.showOption.bind(this);
    }

    componentDidMount(){
        if(this.props.location.state.research){
            let jsonData = GetResearchPlants(this.props.location.state.research.Id);
            this.setState({research : this.props.location.state.research});
            this.setState({ plants : jsonData.responseJSON});
        }
    }

    showOption(){
        if( $('.dropdown-content').is(':visible')){
            $('.dropdown-content').css({'display':'none'});  
        }
        else{
            $('.dropdown-content').css({'display':'block'});
        }
        
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
    }

    render(){
        let plant = {};
        if(this.state.selectedPlant != null){
            plant = this.state.plants[this.state.selectedPlant];
        }
        let statusStyle = {};
        if (plant.status == "Pending"){
            statusStyle = {color : '#ac6236'}
        }

        else{
            statusStyle = {color : '#36ac4d'}
        }
        return (
            <div id="researchPage">
                <h1>Research Report</h1>
                <div className="form-row">
                <article>
                <div class="dropdown">
                    <button onClick={this.showOption} class="dropbtn"></button>
                    <div class="dropdown-content">
                        <a href="#">Stop Research</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
                    {/* <FaCog className="cogIcon" onClick={this.showOption}>
                        <option>Stop Research</option>
                        <option></option>
                        <option></option>
                    </FaCog> */}
                    <i className='fas fa-paperclip'></i>
                    <h2>{this.state.research.Name}</h2>
                    <div className="line"></div>
                    <h3>{this.state.research.Description}</h3>
                    <div className="line"></div>.<div className="line"></div>
                </article>
                <article id="plantDetails">
                    <label>Plant Status: &nbsp;</label><label style={statusStyle}>{plant.Status}</label><br></br>
                    <label>Frequency_of_measurement: &nbsp;</label><label>{plant.Frequency_of_measurement} Hours</label><br></br>
                    <label>Frequency_of_upload: &nbsp;</label><label>{plant.Frequency_of_upload} Hours</label>
                </article>
                </div>
                <br></br><br></br>
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
                        <input type="date" id="date" name="start_date"></input>
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