import React, { Component } from "react";
import { Route, Redirect } from 'react-router';
//import { Progress } from 'reactstrap';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import {GetResearchesByOwner} from '../Utils/getResearches';

class ResearchHistory extends Component{
    constructor(props){
        super(props)

        this.state ={
            percentage:0,
            researches :[]
        }
    }

    componentDidMount()
    {
        let jsonData = GetResearchesByOwner("5c48386ae7179a5449418a67");
        this.setState({ researches : jsonData.responseJSON});
    }

    renderTableBody() {
        const { researches} = this.state;
        let i = 0;
        console.log(researches);
        return researches.map(research => {
            ++i;
          return (
            <tr>
            <th scope="row">{i}</th>
                <td>{research.Name}</td>
                <td>{research.Description}</td>
                <td>
                    <Progress
                        type="circle"
                        width={60}
                        percent={30}
                    />
                </td>
                <td><button className="btn btn-info">Go To Research</button></td>   
            </tr>
          )
        });
      }


    render(){
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