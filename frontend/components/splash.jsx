import React, { useEffect } from 'react';
import Map from './map/map';
import Loading from './loading';

const Splash = ({ fetchCities, cities, match, history }) => {
  window.scrollTo(0, 0);

  useEffect(() => {
    fetchCities();
  }, [match.params])

  const redirectToCity = e => {
    if (e.target.id) history.push(`/cities/${e.target.id}`);
  }

  return (Object.keys(cities).length < 2) ? <Loading /> : (
    <main className="splash" onClick={redirectToCity}>
      <Map cities={cities} history={history}/>
      <div className="splash-welcome">
        <h1>Welcome to Brewer.</h1>
        <h2>Connect with craft beer enthusiasts and the
world of breweries.</h2>
        <h3>Explore top breweries in Guides.</h3>
        <h3>Learn about brewery news in Forum.</h3>
        <h3>Find more of what you're looking for with Brewery Search.</h3>
      </div>
    </main>
  );
}

export default Splash;