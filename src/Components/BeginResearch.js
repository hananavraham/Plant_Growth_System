import React, { Component } from "react";
import { Route, Redirect } from 'react-router';
import {getAllGeneralPlants} from '../Utils/getGeneralPlants';
import {getAllResearchers} from '../Utils/getResearchers';
import {CreateNewResearch} from '../Utils/getResearches';
import {getResearchByID} from '../Utils/getResearches';
import { readExcelFile } from "../Utils/readExcelFile";
import {ExcelRenderer} from 'react-excel-renderer';
import Noty from 'noty';


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
            Number_of_plants : 0,
            files : null,
            goBack: false
        }
        this.showPlantImage = this.showPlantImage.bind(this);
        this.updateOwner    = this.updateOwner.bind(this);
        this.handleSubmit   = this.handleSubmit.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
        this.saveFile = this.saveFile.bind(this);
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
                  <option type="checkbox">{owner.Name}</option>
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

    saveFile(e){
        this.setState({files : e.target.files});
    }

    uploadFile(researchId,files){
         ExcelRenderer(files[0], (err, resp) => {
            if(err){
              console.log(err);            
            }
            else{
                return readExcelFile(researchId,resp.cols,resp.rows);
            }
          });
    }


    handleSubmit(event){
        event.preventDefault();
        let owners = [];
        if(this.state.selectedOwner){
            owners = [this.props.location.state.userId,this.state.selectedOwner];
        }
        else{
            owners = [this.props.location.state.userId];
        }
        let research = {
            Name : this.refs.name.value,
            Description : this.refs.description.value,
            Start_date : this.refs.start_date.value,
            End_date : this.refs.end_date.value,
            Owners : owners,
            Number_of_plants : this.refs.number_of_plants.value,
            General_plant_id : this.state.General_plant_id,
            Status : "Pending",
            Plants_id : []
        };

            try{
                let newResearch = (CreateNewResearch(research)).responseJSON;
                research.Id = newResearch.Id;
                this.uploadFile(newResearch.Id,this.state.files);

                var new_research = (getResearchByID(research.Id)).responseJSON;

                console.log('final research',new_research);

                new Noty({
                    type: 'success',
                    layout: 'topRight',
                    text: 'Research Successfully created',
                    timeout: 3000
                }).show();



                this.setState({research :new_research});
            }

            catch{ 
                new Noty({
                    type: 'error',
                    layout: 'topRight',
                    text: 'Research was not created!',
                    timeout: 3000
                }).show();


            }

            
            
            
    }


    render(){
        if (this.state.research){
            return (<Redirect to={{
                pathname: '/ResearchPage',
                state: {research :this.state.research} 
            }} />)
        }

        else if(this.state.goBack){
            return (<Redirect to={{
                pathname: '/Home',
                state: {userId :localStorage.getItem('userId')} 
            }} />)
        }

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
                    <div className="secondDiv">            
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
                                <input type="date" required className="form-control date" ref="start_date" placeholder="Start Date"></input>
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
                                <input type="date" required className="form-control date" ref="end_date" placeholder="End Date"></input>
                            </div>
                        </div>
                    </div> 
                    <label>Upload Control Plan File:</label>
                    <input className="fileBox" type="file" required onChange={(e)=>this.saveFile(e)} ref="file"></input>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <button id="goBack" onClick={()=>this.setState({goBack: true})} className="btn">Back</button>
                            <button type="submit" className="btn">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


export default BeginResearch;