import React, { useEffect } from 'react';
import Map from './map/map';

const Splash = ({ fetchCities, cities, match }) => {
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
  }, [match.params])

  return (cities.length === 0) ? null : (
    <main className="splash">
      <Map cities={cities}/>
      <div className="splash-welcome">
        <h1>Welcome to Brewer.</h1>
        <h2>Connect with craft beer enthusiasts and the
world of breweries.</h2>
        <h3>Learn about brewery news in Forum.</h3>
        <h3>Explore top breweries in Guides.</h3>
        <h3>Find more of what you're looking for with Brewery Search.</h3>
      </div>
    </main>
  );
}

export default Splash;