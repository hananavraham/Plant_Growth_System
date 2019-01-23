import React, { Component } from "react";
import { Route, Redirect } from 'react-router';
import ProgressBar from './ProgressBar';
import $ from "jquery";

class ResearchHistory extends Component{
    constructor(props){
        super(props)

        this.state ={
            percentage:0
        }
    }

    render(){
    return (

        <div id="research_history">
            <table className="table table-hover table-responsive{-xl}">
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
                    <tr>
                        
                        <th scope="row">1</th>
                        <td>Lemon Pilot</td>
                        <td>This Research will be on Lemon Tree bla bla bla</td>
                        <td>
                            <ProgressBar percentage={25}></ProgressBar>
                        </td>
                        <td><button className="btn btn-info">Go To Research</button></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Apple Check</td>
                        <td>This Research will be on Apple Tree</td>
                        <td>
                            <ProgressBar percentage={55}></ProgressBar>
                        </td>
                        <td><button className="btn btn-info">Go To Research</button></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Nana Pilot1</td>
                        <td>This Research will be on Nana Plant</td>
                        <td>
                            <ProgressBar percentage={10}></ProgressBar>
                        </td>
                        <td><button className="btn btn-info">Go To Research</button></td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Nana dash</td>
                        <td>This Research will be on Nana Plant</td>
                        <td>
                            <ProgressBar percentage={70}></ProgressBar>
                        </td>
                        <td><button className="btn btn-info">Go To Research</button></td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                        <td>Nana</td>
                        <td>This Research will be on Nana Plant</td>
                        <td>
                            <ProgressBar percentage={100}></ProgressBar>
                        </td>
                        <td><button className="btn btn-info">Go To Research</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
    }
}

export default ResearchHistory;