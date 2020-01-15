import React, { useEffect } from 'react';
import Map from './map/map';

const Splash = ({ fetchCities, cities }) => {
  window.scrollTo(0, 0);

  useEffect(() => {
    fetchCities()
      .then(() => {
        debugger
        Object.keys(cities).forEach(cityId => {
          document.getElementsByClassName(`${cityId}`)[0].addEventListener('click', () => {
            document.getElementById(`brewery${cityId}`).scrollIntoView({
              block: "start"
            });
          })
        })
      })
  }, [])

  return (cities.length === 0) ? null : (
    <main className="splash">
      <Map cities={cities}/>
    </main>
  );
}

export default Splash;