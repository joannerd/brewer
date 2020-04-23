import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const City = ({ city }) => {
  const { photoUrl, id, name } = city;
  const divStyle = {
    backgroundImage: `url('${photoUrl}')`,
  };

  return (
    <Link to={`/cities/${id}`} style={divStyle} className="city-info">
      <div>
        {name}
      </div>
    </Link>
  );
};

City.propTypes = {
  city: PropTypes.object.isRequired,
};

export default City;
