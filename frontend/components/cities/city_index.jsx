import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCities } from '../../actions/city_actions';
import City from './city_index_item';

const CityIndex = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state => Object.values(state.entities.cities)));

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchCities());
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

export default CityIndex;
