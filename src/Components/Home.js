import React, { Component } from "react";
import { Route, Redirect } from 'react-router';
import Moment from 'react-moment';
import ResearchBox from './ResearchBox';
import AddNewResearch from './AddNewResearchBox';
import {GetResearchesByOwner} from '../Utils/getResearches';
import {getAllGeneralPlants} from '../Utils/getGeneralPlants';

class Home extends Component{

    constructor (props) {
        super(props);
        this.state ={
            researches : [],
            generalPlants : [],
            currentResearches : [],
            currentIndex : 0
        }

        this.nextProperty = this.nextProperty.bind(this);
        this.prevProperty = this.prevProperty.bind(this);
    }

  
    nextProperty(){
        if(this.state.currentIndex < this.state.researches.length){
            this.setState({currentIndex: this.state.currentIndex +1});
        }
        else{
            this.setState({currentIndex: 0});
            
        }
        console.log('newIndex:',this.state.currentIndex);

    }

    prevProperty(){
        if(this.state.currentIndex > 0){
            this.setState({currentIndex: this.state.currentIndex -1});
        }

        else{
            this.setState({currentIndex: this.state.researches.length});
        }
        console.log('newIndex:',this.state.currentIndex);

    }

    componentDidMount()
    {
        var userId = localStorage.getItem('userId');
        let jsonData = {};
        try{
            jsonData = GetResearchesByOwner(userId);

        }
        catch{}
        this.setState({ researches : jsonData.responseJSON, userId:userId});
        let plants = getAllGeneralPlants();
        this.setState({generalPlants : plants.responseJSON}); 
    }

    renderResearches() {
        let plantImg = "";
        const { researches} = this.state;
        if(researches != null){
            return researches.map((research, index) => {
                this.state.generalPlants.map(plant =>{
                    if(plant.Id == research.General_plant_id){
                        plantImg = plant.Image;
                    }
                })

                // printing just 3 boxes on page
                if(!((index >= this.state.currentIndex * 3) && (index < this.state.currentIndex * 3 +3))){
                    return;
                }
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
                
                
                <div className="input-group md-form form-sm form-1 pl-0">
                    <div className="input-group-prepend">
                        <span className="input-group-text purple lighten-3" id="basic-text1"><i className="fas fa-search text-white"
                            aria-hidden="true"></i></span>
                    </div>
                    <input className="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search"></input>>
                </div>

                <div id="boxes">
                    {/* <button className="round" onClick={this.prevProperty}>Prev</button> */}
                    <a onClick={this.prevProperty} className="previous round">&#8249;</a>

                    <AddNewResearch userId={this.state.userId}></AddNewResearch>
                    {this.renderResearches()}
                    <a onClick={this.nextProperty} className="next round">&#8250;</a>
                    {/* <button onClick={this.nextProperty}>Next</button> */}
                </div>
            </div>
        )};
}

export default Home;