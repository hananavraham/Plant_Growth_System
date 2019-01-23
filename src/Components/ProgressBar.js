import React, { Component } from 'react';
import Filler from './Filler';

const ProgressBar = (props) =>{
    return(
        <div className="progress-bar">
            <Filler percentage={props.percentage}></Filler>
        </div>
    )
}


export default ProgressBar