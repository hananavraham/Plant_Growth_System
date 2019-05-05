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
            researches : [],
            generalPlants : [],
            properties : [],
            property : {},
            currentIndex : 0
        }

        this.nextProperty = this.nextProperty.bind(this);
        this.prevProperty = this.prevProperty.bind(this);
    }

  
    nextProperty(){
        this.setState({currentIndex: this.state.currentIndex +1});
        this.setState({property : this.state.properties[this.state.currentIndex]});
        console.log('newIndex:',this.state.currentIndex);
    }

    prevProperty(){
        this.setState({currentIndex: this.state.currentIndex -1});
        this.setState({property : this.state.properties[this.state.currentIndex]});
        console.log('newIndex:', this.state.currentIndex);
    }

    componentDidMount()
    {
        let jsonData = GetResearchesByOwner(this.props.location.state.userId);
        this.setState({ researches : jsonData.responseJSON});
        let plants = getAllGeneralPlants();
        this.setState({generalPlants : plants.responseJSON}); 
        this.setState({properties : this.state.researches, property : this.state.researches[0]});
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

    return (       
        <div id="dashboard">
            <button onClick={this.nextProperty}>Next</button>
            <button onClick={this.prevProperty}>Prev</button>
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