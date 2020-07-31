import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCities } from '../../actions/city_actions';
import City from './city_index_item';

const CityIndex = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state => Object.values(state.entities.cities)));

  useEffect(() => {
    dispatch(fetchCities());
  }, []);

  return (
    <section className="city-index">
      <ul className="city-index-list">
        {cities.map((city) => (
          <City city={city} key={city.id} />
        ))}
      </ul>
    </section>
  );
};

export default CityIndex;
