import React from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router-dom';
import './index.css';
import ReactRouter from './Router/Router';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import '../node_modules/noty/lib/noty.css';
import '../node_modules/noty/lib/themes/mint.css';

ReactDOM.render( 
    <Router>
        <ReactRouter></ReactRouter>
    </Router>, document.getElementById('root')
    )
serviceWorker.unregister();
