import React, { Component } from "react";
import { Route, Redirect } from 'react-router';
import { Progress } from 'react-sweet-progress';
import {GetResearchesByOwner} from '../Utils/getResearches';


class ResearchHistory extends Component{
    constructor(props){
        super(props)

        this.state ={
            percentage:0,
            researches :[],
            researchClick : false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        // let jsonData = GetResearchesByOwner("5c48386ae7179a5449418a67");
        const userId = "5c48386ae7179a5449418a67";
        const url = "https://plantgrowthsystembackend.azurewebsites.net/Research/GetResearchesByOwner?ownerId=" + userId;
        fetch(url, {
            method: "GET"
        }).then(response => response.json()).then(researches=> {
            console.log(researches);
            this.setState({ researches : researches});
        });
        //this.setState({ researches : jsonData.responseJSON});
    }

    handleClick(index){
        this.setState({researchClick: true, research: this.state.researches[index]});
        return;
    }

    renderTableBody() {
        const { researches} = this.state;
        if(researches != null){
            return researches.map((research,index) => {

                return (
                    <tr>
                        <td scope="row">{index}</td>
                        <td>{research.Name}</td>
                        <td>{research.Description}</td>
                        <td>
                            <Progress
                                type="circle"
                                width={60}
                                percent={30}
                            />
                        </td>
                        <td><button onClick={() => this.handleClick(index)} className="btn btn-info">Go To Research</button></td>   
                    </tr>
                )
            });
        }
      }

    render(){
        const { researches} = this.state;
        if (this.state.researchClick === true){
            return (<Redirect to={{
                pathname: '/ResearchPage',
                state: {research :this.state.research} 
            }} />)
        }
        return (
            <div id="research_history">
                <h1>Research History</h1>
                <table className="table table-striped table-hover table- table-responsive{-xl}">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Status</th>
                        <th scope="col">Results</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableBody()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ResearchHistory;