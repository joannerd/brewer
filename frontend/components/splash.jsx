import React from 'react';
import { useHistory } from 'react-router-dom';
import Map from './map/map';

const Splash = () => {
  const history = useHistory();

  const redirectToCity = e => {
    if (e.target.id) history.push(`/cities/${e.target.id}`);
  };

  return (
    <main className="splash" onClick={redirectToCity}>
      <Map />
      <div className="splash-welcome">
        <h1>Welcome to Brewer.</h1>
        <h2>
          Connect with craft beer enthusiasts and the world of breweries.
        </h2>
        <h3>Explore top breweries in Guides.</h3>
        <h3>Learn about brewery news in Forum.</h3>
        <h3>Find more of what you're looking for with Brewery Search.</h3>
      </div>
    </main>
  );
};

export default Splash;
