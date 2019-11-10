import React from 'react';
import { Link } from 'react-router-dom';

class Brewery extends React.Component {
  render() {
    const addressLink = this.props.brewery.address.split(" ").join("+")
    return (
      <div className="brewery">
        <h1>
          <a href={this.props.brewery.website} target="_blank">
            {this.props.brewery.name}
          </a>
        </h1>
        <h2>
          {this.props.brewery.address}
        </h2>
        <p>{this.props.brewery.description}</p>
        <a href={`https://www.google.com/maps/place/${addressLink}/`} target="_blank"><button className="gmap-link">
          Open in Google Maps
        </button></a>
      </div>
    )
  }
}

export default Brewery;