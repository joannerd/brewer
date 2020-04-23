import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import City from './city_index_item';

const CityIndex = ({ cities, fetchCities }) => {
  window.scrollTo(0, 0);

  useEffect(() => {
    fetchCities();
  }, []);

  return (
    <section className="city-index">
      <ul className="city-index-list">
        {cities.map((city, i) => (
          <City city={city} key={i} />
        ))}
      </ul>
    </section>
  );
};

CityIndex.propTypes = {
  cities: PropTypes.array.isRequired,
  fetchCities: PropTypes.func.isRequired,
};

export default CityIndex;
