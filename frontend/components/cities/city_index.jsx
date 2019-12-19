import React, { useEffect } from 'react';
import City from './city_index_item';

const CityIndex = ({ cities, fetchCities }) => {
  window.scrollTo(0, 0);
  
  useEffect(() => {
    document.title = "Brewer - Cities";
    fetchCities();
  }, [])

  return (
    <section className="city-index">
      <ul className="city-index-list">
        {cities.map((city, i) => (
          <City city={city} key={i}/>
        ))}
      </ul>
    </section>
  )
}

export default CityIndex;