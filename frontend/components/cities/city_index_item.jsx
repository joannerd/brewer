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
      <Link to={`/cities/${city.id}`} style={divStyle} className="city-info">
        <div>
          {city.name}
        </div>
      </Link>
    )
  }
}

export default City;