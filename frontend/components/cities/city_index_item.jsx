import React from 'react';
import { Link } from 'react-router-dom';

class City extends React.Component {

  render() {
    const city = this.props.city
    return (
      <div className="city">
        <h3><Link to={`/cities/${city.id}`} target="_blank" >{city.name}</Link></h3>
        description about city
      </div>
    )
  }
}

export default City;