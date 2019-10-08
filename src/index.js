import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from  'react-router-dom';
import{ProductProvider} from './context';
import {StoreGuide} from './StoreContext'
ReactDOM.render(
    <StoreGuide>
    <ProductProvider>
        <Router>
            <App />
        </Router>
    </ProductProvider>
    </StoreGuide>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
