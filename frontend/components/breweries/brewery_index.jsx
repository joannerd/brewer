import React, { useEffect } from 'react';
import Brewery from './brewery_index_item';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

const BreweryIndex = ({ breweries, fetchBreweries }) => {
  window.scrollTo(0, 0);

  useEffect(() => {
    fetchBreweries()
      .then(() => {
        alphabet.forEach(alpha => {
          document.getElementById(alpha).addEventListener('click', () => {
            document
              .getElementsByClassName(alpha)[0]
              .scrollIntoView({
                block: "center"
              });
          });
        })
      })
  }, [])

  if (breweries.length < 49) return null;
  return (
    <section className="brewery-index">
      <div className="brewery-nav">
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
        <div className="Z"></div>
      </div>
    </section>
  );
}

export default BreweryIndex;