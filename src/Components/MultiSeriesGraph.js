import React, { PureComponent, Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import {getControlPlanByPlantId} from '../Utils/getControlPlans';


class MultiSeriesGraph extends Component{
    constructor(props){
        super(props)

        this.state={
            plants: []
        }
    }   
   
    render() {
        let controlPlan = {};
        let plan = null;
        try{
            plan = this.props.plants[this.props.selectedPlant];
            if(plan){
                controlPlan = (getControlPlanByPlantId(plan.Id)).responseJSON;          
            }
        }
        catch{}
        
        let data = [];

        if(plan != null && plan.Humidity){
            const size = plan.Humidity.length;
            for(let i=0; i < size ; ++i ){
                var date = new Date(plan.Humidity[i].Date).toLocaleDateString();
                try{
                    if(date >= this.props.start_date && date <= this.props.end_date){
                        data.push({Date: plan.Humidity[i].Date,Humidity: plan.Humidity[i]._Humidity, Light: plan.Light[i]._Light,
                            minHum: controlPlan.Intervals[0].min_Humidity, maxHum:controlPlan.Intervals[0].max_Humidity ,amt: 10});
                    }    
                }
                catch{}
                     
            }
        }
        return (
        <LineChart
            width={1500}
            height={550}
            data={data}
            margin={{
            top: 10, right: 10, left: 10, bottom: 10,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis tick={{ fill: '#f8f9fa' }} dataKey="Date" label={{ value: 'Date', offset: 0, position: 'insideBottomRight' , fill:'#ffff'}}/>
            
            <YAxis tick={{ fill: '#f8f9fa' }} label={{ value: 'Volume', angle: -90, position: 'insideLeft' , fill:'#ffff'}}/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Light" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Humidity" stroke="#82ca9d" />
            <Line type="monotone" dataKey="minHum" stroke="#dc3545" />
            <Line type="monotone" dataKey="maxHum" stroke="#dc3545" />
        </LineChart>
        );
    }
}


export default MultiSeriesGraph;

