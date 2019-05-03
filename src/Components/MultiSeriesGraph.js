import React, { PureComponent, Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


class MultiSeriesGraph extends Component{
    constructor(props){
        super(props)

        this.state={
            plants: []
        }
    }   
   
    render() {
        let plan = this.props.plants[this.props.selectedPlant];
        let data = [];

        if(plan != null){
            const size = plan.Humidity.length;
            for(let i=0; i < size ; ++i ){
                data.push({Date: plan.Humidity[i].Date,Humidity: plan.Humidity[i]._Humidity, Temperature: plan.Temperature[i]._Temperature,amt: 10});
            }
        }
        
        console.log("data:", data);
        return (
        <LineChart
            width={950}
            height={450}
            data={data}
            margin={{
            top: 10, right: 20, left: 20, bottom: 10,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Humidity" stroke="#82ca9d" />
        </LineChart>
        );
    }
}


export default MultiSeriesGraph;

