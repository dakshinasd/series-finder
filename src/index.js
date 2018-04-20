import React from 'react';
import ReactDOM from 'react-dom';
import "./bootstrap.min.css";
import './index.css';
import App from './App';
import Series from "./components/series/index";
import {BrowserRouter, Route, Link} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
        <div>
            <nav className="main-nav">
                <Link to="/">Home</Link>
                <Link to="/series">Series</Link>
            </nav>
            <div className="main-container">
                <Route exact path="/" component={App} />
                <Route path="/series" component={Series} />
            </div>

        </div>
    </BrowserRouter>    
, document.getElementById('root'));
