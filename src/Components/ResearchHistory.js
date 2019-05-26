import React, { Component } from "react";
import { Route, Redirect } from 'react-router';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import Moment from 'react-moment';
import {  MDBBtn,MDBDataTable } from 'mdbreact';
import {FaTrashAlt} from 'react-icons/fa';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {DeleteResearch} from '../Utils/getResearches';


class ResearchHistory extends Component{
    constructor(props){
        super(props)

        this.state ={
            percentage:0,
            researches :[],
            researchClick : false,
            refresh : false
        }

        this.handleClick = this.handleClick.bind(this);
        this.checkStatus = this.checkStatus.bind(this);
        this.deleteResearch = this.deleteResearch.bind(this);
    }

    componentDidMount(){
        // let jsonData = GetResearchesByOwner("5c48386ae7179a5449418a67");
        const userId = localStorage.getItem('userId');
        const url = "https://plantgrowthsystembackend.azurewebsites.net/Research/GetResearchesByOwner?ownerId=" + userId;
        fetch(url, {
            method: "GET"
        }).then(response => response.json()).then(researches=> {
            this.setState({ researches : researches});
        });
        //this.setState({ researches : jsonData.responseJSON});
    }

    handleClick(index){
        this.setState({researchClick: true, research: this.state.researches[index]});
        return;
    }

    deleteResearch(index){
        console.log('delete research', this.state.researches[index].Id);
        confirmAlert({
            title: 'Delete Research',
            message: 'Are you sure delete this research?',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    DeleteResearch(this.state.researches[index].Id);
                    this.setState({refresh:true});
                }
              },
              {
                label: 'No',
                onClick: () => {}
              }
            ]
          })
    }

    renderTableBody() {
        const { researches} = this.state;
        let d = [];
        const style ={
            'cursor' : 'pointer',
            'color': '#db1818'
        }
        if(researches != null){
            researches.map((research,index) => {
                d.push({
                    '#': index,
                    'Name':research.Name,
                    'Description':research.Description,
                    'Status': this.checkStatus(research),
                    'Results': <div><MDBBtn onClick={() => this.handleClick(index)} rounded size="sm">Go To Research</MDBBtn><FaTrashAlt style={style} onClick={()=>this.deleteResearch(index)}/></div>
                })
            });
        }

        const data = {
            columns: [
            {
                label: '#',
                field: '#',
                sort: 'asc',
                width: 50
            },
            {
                label: 'Name',
                field: 'Name',
                sort: 'asc',
                width: 250
            },
            {
                label: 'Description',
                field: 'Description',
                sort: 'asc',
                width: 250
            },
            {
                label: 'Status',
                field: 'Status',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Results',
                field: 'Results',
                sort: 'asc',
                width: 350
            }
            ],
            rows: d
        };
        
        return (
            <MDBDataTable
                striped
                responsive
                small
                data={data}
                searching={false}
            />
            );
    }


    checkStatus(research){

        switch(research.Status){
            case 'Running':
                var start = new Date(research.Start_date).toLocaleDateString();
                var end = new Date(research.End_date).toLocaleDateString();
                return (<Moment duration={start} date={end}></Moment>)

            case 'Pending':
                return(<Progress type="circle" width={60} status="warning" />)

            case 'Complete':
                return(<Progress type="circle" percent={100} width={60} status="success" />)

            case 'Stop':
                return('Stop');
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
                {this.renderTableBody()}
            </div>
        );
    }
}

export default ResearchHistory;