import React from "react";
import { Route, Redirect } from 'react-router';

const BeginResearch = () => {

    return (
        <div id="beginResearch">
            <h1>Create New Research</h1>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="Research Name"></input>
                    </div>
                    <img></img>
                    <div className="form-group">
                        <textarea className="form-control" rows="5" placeholder="Description"></textarea>
                    </div>
                </div>
                
                <div className="form-row">
                    <div className="form-group">
                        <label>Plant Type</label>
                        <select className="form-control">
                            <option>Nana</option>
                            <option>Basil</option>
                        </select>                    
                    </div>
                    <div className="form-group">
                        <input type="number" className="form-control" placeholder="Number Of Plants"></input>
                    </div>
                    <div className="form-group">
                        <input type="date" className="form-control" placeholder="Start Date"></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Add Owners</label>
                        <select className="form-control">
                            <option>Michael</option>
                            <option>Yogev</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="date" className="form-control" placeholder="End Date"></input>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button className="btn">Next</button>

                    </div>

                </div>
            </form>
            {/* <input type="text" placeholder="Research Name"></input>
            <textarea placeholder="Description"></textarea>
            <span>
                <img></img>
            </span>
            <input list="plants" name="plantType" placeholder="Plant Type"></input>
            <datalist id="plants">
                <option value="Basil"></option>
                <option value="Nana"></option>
                <option value="Lemon"></option>
            </datalist> 
            <span>
                <input type="number" placeholder="Number of Plants"></input>
                <input type="date" placeholder="Start Date"></input>
            </span>
            <input type="date" placeholder="End Date"></input>
            <input type="date" placeholder="Start Date"></input> 
            <input list="browsers" name="browser" placeholder="Add Owners"></input>
            <datalist id="browsers">
                <option value="Internet Explorer"></option>
                <option value="Firefox"></option>
                <option value="Chrome"></option>
                <option value="Opera"></option>
                <option value="Safari"></option>
            </datalist>   
            <button>Next</button>       */}
        </div>
    );
}

export default BeginResearch;