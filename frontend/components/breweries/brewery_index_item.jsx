import React from 'react';
import { Link } from 'react-router-dom';

class Brewery extends React.Component {
  render() {
    const addressLink = this.props.brewery.address.split(" ").join("+")
    return (
      <div className="brewery">
        <h1>
          <a href={`https://www.${this.props.brewery.website}`} target="_blank">{this.props.brewery.name}</a>
        </h1>
        <h2>
          <a href={`https://www.google.com/maps/place/${addressLink}/`} target="_blank">{this.props.brewery.address}</a>
        </h2>
        <p>{this.props.brewery.description}</p>
      </div>
    )
  }
}

export default Brewery;