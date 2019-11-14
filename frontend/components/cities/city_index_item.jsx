import React from 'react';
import { Link } from 'react-router-dom';

class City extends React.Component {
  render() {
    const city = this.props.city;
    
    const imgUrl = city.photoUrl
    const divStyle = {
      backgroundImage: `url('${imgUrl}')`,
    };

    const cursorStyle = {
      cursor: "not-allowed"
    }    
    return ((city.id === 3) || (city.id === 11)) ?
    (
      <div style={divStyle} className="city-info">
        <Link to={`/cities/${city.id}`}>{city.name}</Link>
      </div>
    ) : (
        <div style={divStyle} className="city-info">
          <Link style={cursorStyle}>{city.name}</Link>
        </div>
    )
  }
}

export default City;