import React, { Component } from "react";
import { Route, Redirect } from 'react-router';
import Moment from 'react-moment';
import ResearchBox from './ResearchBox';
import {GetResearchesByOwner} from '../Utils/getResearches';
import {getAllGeneralPlants} from '../Utils/getGeneralPlants';
 
class Home extends Component{

    constructor (props) {
        super(props);
        this.state ={
            BeginResearch: false,
            ResearchHistory: false,
            researches : [],
            generalPlants : []
        }
    }

    componentDidMount()
    {
        let jsonData = GetResearchesByOwner("5c48386ae7179a5449418a67");
        this.setState({ researches : jsonData.responseJSON});
        let plants = getAllGeneralPlants();
        this.setState({generalPlants : plants.responseJSON}); 
    }



    renderResearches() {
        let plantImg = "";
        const { researches} = this.state;
        if(researches != null){
            return researches.map(research => {
                this.state.generalPlants.map(plant =>{
                    if(plant.Id == research.General_plant_id){
                        plantImg = plant.Image;
                    }
                })
                return (
                    <ResearchBox name={research.Name} 
                            description={research.Description} 
                            status={research.Status}
                            image={plantImg}
                            date={ <Moment date={research.Start_date} 
                            durationFromNow></Moment>}
                            research = {research}
                    />
            )
            });
        }   
      }

    
    render(){

        if(this.state.renderResearch){
            this.props.history.push(`/ResearchPage`);
        }

        if (this.state.BeginResearch){
            return (<Redirect to={{
                pathname: '/BeginResearch'
            }} />)
        }

    return (
        <div id="dashboard">
            <div className="input-group md-form form-sm form-1 pl-0">
                <div className="input-group-prepend">
                    <span className="input-group-text purple lighten-3" id="basic-text1"><i className="fas fa-search text-white"
                        aria-hidden="true"></i></span>
                </div>
                <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search"></input>>
            </div>
            <div id="boxes">
                <ResearchBox name="Create New Research" 
                         image="./images/plus.jpg"
                />
                {this.renderResearches()}
            </div>
        </div>
    )};
}

export default Home;