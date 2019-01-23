import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactRouter from './Router/Router';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
        // <BeginResearch/>, document.getElementById('root'));
        <Router>
            <ReactRouter></ReactRouter>
        </Router>, document.getElementById('root')
    )
   

serviceWorker.unregister();
