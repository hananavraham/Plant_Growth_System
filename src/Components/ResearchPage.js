import React, { Component } from "react";
import { Route, Redirect } from 'react-router';
import MultiSeriesGraph from './MultiSeriesGraph';
import {GetResearchPlants, StopOrContinueResearch} from '../Utils/getResearches';
import {FaCog} from 'react-icons/fa';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css' 
import $ from "jquery";

class ResearchPage extends Component{
    constructor(props){
        super(props)

        this.state={
            plants:[],
            research : {},
            start_date : null,
            end_date : null
        }
        this.renderSelectPlant = this.renderSelectPlant.bind(this);
        this.showPlantRecords  = this.showPlantRecords.bind(this);
        this.showOption        = this.showOption.bind(this);
        this.updateEndDate     = this.updateEndDate.bind(this);
        this.updateStartDate   = this.updateStartDate.bind(this);
        this.stopResearch      = this.stopResearch.bind(this);
        this.updateResearchControlPlan = this.updateResearchControlPlan.bind(this);
    }

    componentDidMount(){
        if(this.props.location.state.research){
            try{
                let jsonData = GetResearchPlants(this.props.location.state.research.Id);

                this.setState({research : this.props.location.state.research});
                this.setState({ plants : jsonData.responseJSON});
                // this.setState({
                //     start_date: this.props.location.state.research.Start_date,
                //     end_date: this.props.location.state.research.End_date
                // });
            }

            catch{}
            
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

    updateEndDate(e){
        var date = new Date(e.target.value).toLocaleDateString();
        this.setState({end_date : date});
    }

    updateStartDate(e){
        var date = new Date(e.target.value).toLocaleDateString();
        this.setState({start_date : date});
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

    updateResearchControlPlan(){
        if(this.state.research.Status == 'Complete' || this.state.research.Status == 'Stop'){
            return;
        }
        console.log('update');
    }


    stopResearch(){
        if(this.state.research.Status == 'Complete' || this.state.research.Status == 'Stop'){
            return;
        }
        confirmAlert({
            title: 'Stop Research',
            message: 'Are you sure to stop this research?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {StopOrContinueResearch(this.state.research.Id,'Stop')}
              },
              {
                label: 'No',
                onClick: () => {}
              }
            ]
          })
        
    }

    showPlantRecords(event){
        this.setState({selectedPlant: event.target.value -1});
    }

    render(){
        let plant = {};
        const {research} = this.state;
        let statusStyle = {};
        try{
            if(this.state.selectedPlant != null){
                plant = this.state.plants[this.state.selectedPlant];
            }
            
            if (plant.status == "Pending"){
                statusStyle = {color : '#ac6236'}
            }
    
            else{
                statusStyle = {color : '#36ac4d'}
            }
        }

        catch{}

        return (
            <div id="researchPage">
                <h1>Research Report</h1>
                <div className="form-row">
                    <article>
                        <i className='fas fa-paperclip'></i>
                        <h2>{research.Name}</h2>
                        <div className="line"></div>
                        <h3>{research.Description}</h3>
                        <div className="line"></div>.<div className="line"></div>
                    </article>
                    <article>
                        <label>Start Date:</label> <label>{research.Start_date}</label><br></br>
                        <label>End Date:</label> <label>{research.End_date}</label>
                    </article>
                    <article id="plantDetails">
                        <label>Plant Status: &nbsp;</label><label style={statusStyle}>{plant.Status}</label><br></br>
                        <label>Frequency_of_measurement: &nbsp;</label><label>{plant.Frequency_of_measurement} Hours</label><br></br>
                        <label>Frequency_of_upload: &nbsp;</label><label>{plant.Frequency_of_upload} Hours</label>
                    </article>
                    <div className="dropdown">
                        <button onClick={this.showOption} className="dropbtn"><FaCog size='lg'></FaCog></button>
                        <div className="dropdown-content">
                            <a href="#" onClick={this.updateResearchControlPlan}>Update Control Plans</a>
                            <a href="#">Link 3</a>
                            <a href="#" onClick={this.stopResearch}>Stop Research</a>
                        </div>
                    </div>
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
                        <input type="date" onChange={this.updateEndDate} name="end_date"></input>
                    </p>
                    <p>
                        <label>Start Date</label>
                        <input type="date" onChange={this.updateStartDate} name="start_date"></input>
                    </p>
                    
                    <MultiSeriesGraph plants={this.state.plants} 
                                      selectedPlant={this.state.selectedPlant}
                                      end_date={this.state.end_date}
                                      start_date={this.state.start_date}
                                      />
                </div>
                

            </div>
        );
    }

};




export default ResearchPage;