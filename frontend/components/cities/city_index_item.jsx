import React from 'react';
import { Link } from 'react-router-dom';

const City = ({ city }) => {
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

export default City;