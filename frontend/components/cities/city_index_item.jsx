import React from 'react';
import { Link } from 'react-router-dom';

class City extends React.Component {
  render() {
    const city = this.props.city;
    const imgUrl = city.photoUrl
    const divStyle = {
      backgroundImage: `url('${imgUrl}')`,
    };

    return (
      <div style={divStyle} className="city-info">
        <Link to={`/cities/${city.id}`}>{city.name}</Link>
      </div>
    )
  }
}

export default City;