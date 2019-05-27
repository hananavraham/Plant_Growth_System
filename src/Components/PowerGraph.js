import React, { PureComponent, Component } from 'react';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {getControlPlanByPlantId} from '../Utils/getControlPlans';

class PowerGraph extends Component{
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
        console.log(plan);
        if(plan != null && plan.PowerConsumption){
            const size = plan.PowerConsumption.length;
            for(let i=0; i < size ; ++i ){
                var date = new Date(plan.PowerConsumption[i].Date).toLocaleDateString();
                try{
                    if(date >= this.props.start_date && date <= this.props.end_date){
                        data.push({Date: plan.PowerConsumption[i].Date, Power: plan.PowerConsumption[i].powerConsumption, Water: plan.WaterAmount[i].waterAmount });
                    }    
                }
                catch{}
                     
            }
        }


        const Toolip = ( <div style={{ fontFamily: 'Roboto',  color : '#00b4cd',  fontSize: '10px' }} >
            <p>Power</p>
        </div> )

        return (
            <BarChart
                width={1500}
                height={550}
                data={data}
                margin={{
                top: 10, right: 10, left: 10, bottom: 10,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Date" label={{ value: 'Date', offset: 0, position: 'insideBottomRight' , fill:'#ffff'}}/>
                <YAxis dataKey="Power" label={{ value: 'Volume', angle: -90, position: 'insideLeft' , fill:'#ffff'}}/>
                <Tooltip />
                <Legend />
                <Bar dataKey="Power" fill="#8884d8" />
                <Bar dataKey="Water" fill="#82ca9d" />
            </BarChart>
        );
    }
}


export default PowerGraph;

