import React, { Component } from 'react';

const ResearchBox = (props) =>{
    return(
        <div id="researchBox">
        <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css'></link>

            <img src={props.image}></img>
            <div>
                <i className='fas fa-cog'></i>
                <h5>{props.name}</h5>
                <article>{props.description}</article>
                <p>
                    <label><i></i><i className='far fa-calendar-alt'></i></label>
                    <time>{props.date}</time>
                </p>
                
                <span>
                    <h7>{props.status}</h7>
                </span>
            </div>
        </div>
    )
}


export default ResearchBox