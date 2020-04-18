import React, { useEffect } from 'react';
import Brewery from './brewery_index_item';
import Loading from '../loading';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

const BreweryIndex = ({ breweries, fetchBreweries }) => {
  window.scrollTo(0, 0);

  useEffect(() => {
    fetchBreweries();
  }, []);

  const clickAlpha = e => {
    document.getElementsByClassName(e.target.id)[0]
      .scrollIntoView({
        block: 'center',
      });
  };

  if (breweries.length < 49) return <Loading />;
  return (
    <section className="brewery-index">
      <div className="brewery-nav" onClick={clickAlpha}>
        {alphabet.map((alpha, i) => (
          <li key={i} id={alpha}>
            {alpha[0]}
          </li>
        ))}
      </div>
      <div className="brewery-index-list">
        {breweries.map((brewery, i) => (
          <div key={i} className={`brewery ${brewery.name[0]}`}>
            <Brewery
              breweryId={brewery.id}
              brewery={brewery}
            />
          </div>
        ))}
        <div className="Z" />
      </div>
    </section>
  );
};

export default BreweryIndex;
