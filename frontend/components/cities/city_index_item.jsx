import React from 'react';
import { Link } from 'react-router-dom';

class City extends React.Component {
  render() {
    const city = this.props.city
    return (
        <div className="city-info">
          <h1><Link to={`/cities/${city.id}`} >{city.name}</Link></h1>
          <p>description about city's beer scene: {city.description}</p>
        </div>
    )
  }
}

export default City;