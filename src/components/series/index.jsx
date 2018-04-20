import React, { Component } from "react";
import axios from "axios";

import SearchItem from "./SearchItem";

class Series extends Component{
    state = {
        series: []
    }

    search = () => {
        let query = this.refs.query.value;
        if(query !== "") {
            axios.get("http://api.tvmaze.com/search/shows?q=" + query)
                .then( results => {
                    this.setState({series: results.data});
                    console.log(results)
                })
        }
    }

    render() {
        return (
            <div className="series clearfix">
                <div className="left float-left">
                    <h3 className="title">Search</h3>
                    <div className="form-group search-panel">
                        <div className="form-inline">
                            <input type="text" className="form-control" ref="query"/>
                            <button className="btn btn-primary" onClick = {this.search}>Search</button>
                        </div>
                    </div>
                    <div className="results-container">
                        {
                            this.state.series.map( (serie, index) => {
                                return <SearchItem key={index} series = {serie}/>
                            })
                        }
                        
                    </div>
                </div>
                <div className="right float-right">
                    <h3 className="title">My Movies</h3>
                </div>
            </div>
        )
    }
}

export default Series;