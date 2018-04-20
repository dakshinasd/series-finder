import React, { Component } from "react";

class SearchItem extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="search-item clearfix">
                <div className="series-image float-left">
                    <img src={(this.props.series.show.image)?(this.props.series.show.image.medium):""} alt=""/>
                </div>
                <div className="float-right series-info">
                    <div className="series-name">{this.props.series.show.name}</div>
                    <div className="series-summary">
                        {this.props.series.show.summary}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchItem;