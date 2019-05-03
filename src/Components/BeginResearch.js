import React, { Component } from "react";
import { Route, Redirect } from 'react-router';
import {getAllGeneralPlants} from '../Utils/getGeneralPlants';
import {getAllResearchers} from '../Utils/getResearchers';
import {CreateNewResearch} from '../Utils/getResearches';

class BeginResearch extends Component{
    constructor(props){
        super(props)

        this.state ={
            generalPlants : [],
            owners : [],
            image : null,
            Description : null,
            Name : null,
            Start_date : null,
            End_date : null,
            General_plant_id : null,
            Number_of_plants : 0
        }
        this.showPlantImage = this.showPlantImage.bind(this);
        this.updateOwner    = this.updateOwner.bind(this);
        this.handleSubmit   = this.handleSubmit.bind(this);
    }

    componentDidMount()
    {
        let jsonData = getAllGeneralPlants();
        this.setState({ generalPlants : jsonData.responseJSON});
        let ownersData = getAllResearchers();
        this.setState({owners : ownersData.responseJSON});
    }

    renderSelectPlantType() {
        const { generalPlants} = this.state;
        if(generalPlants != null){
            return generalPlants.map(generalPlant => {
                return (
                  <option>{generalPlant.Name}</option>
                )
            });
        }
    }

    renderSelectOwners() {
        const { owners} = this.state;
        if(owners != null){
            return owners.map(owner => {
                return (
                  <option>{owner.Name}</option>
                )
            }); 
        }
    }

    updateOwner(event){       
        this.state.owners.map(owner =>{
            if(owner.Name == event.target.value){
                this.setState({selectedOwner : owner.Id});
            }
        })
    }

    showPlantImage(event) {
        this.state.generalPlants.map(plant=>{
            if(plant.Name == event.target.value){
                this.setState({image : plant.Image});
                this.setState({General_plant_id : plant.Id});
            }
        })
            

    }

    handleSubmit(event){
        event.preventDefault();
        let research = {
            Name : this.refs.name.value,
            Description : this.refs.description.value,
            Start_date : this.refs.start_date.value,
            End_date : this.refs.end_date.value,
            Owners : this.state.selectedOwner,
            Number_of_plants : this.refs.number_of_plants.value,
            General_plant_id : this.state.General_plant_id,
            Status : "Pending"
        };
            CreateNewResearch(research);
            this.props.research = research;
            this.props.history.push(`/ResearchPage`);
    }


    render(){
        return (
            <div id="beginResearch">
                <h1>Create New Research</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input type="text" required className="form-control" ref="name" placeholder="Research Name"></input>
                        </div>   
                        <img src={this.state.image}></img>
                        <div id="textarea" className="form-group">
                            <textarea required onChange={this.handleChange} className="form-control" rows="5" ref="description" placeholder="Description"></textarea>
                        </div>
                    </div>             
                    <div className="form-row">
                        <div className="form-group">
                            <label>Plant Type</label>
                            <select id="plantType" required onChange={this.showPlantImage} className="form-control">
                                <option></option>
                                {this.renderSelectPlantType()}
                            </select>                    
                        </div>
                        <div className="form-group">
                            <input type="number" required className="form-control" min='1' ref="number_of_plants" placeholder="Number Of Plants"></input>
                        </div>
                        <div className="form-group">
                            <input type="date" required className="form-control" ref="start_date" placeholder="Start Date"></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Add Owners</label>
                            <select className="form-control" onChange={this.updateOwner}>
                                <option></option>
                                {this.renderSelectOwners()}
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="date" required className="form-control" ref="end_date" placeholder="End Date"></input>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn">Next</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


export default BeginResearch;