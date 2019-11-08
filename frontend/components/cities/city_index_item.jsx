import React from 'react';
import { Link } from 'react-router-dom';
// import BreweryMap from './brewery_map';

class City extends React.Component {
  render() {
    const city = this.props.city
    return (
        <div className="city-info">
          <h3><Link to={`/cities/${city.id}`} target="_blank" >{city.name}</Link></h3>
          <p>description about city</p>
        </div>
    )
  }
}

export default City;