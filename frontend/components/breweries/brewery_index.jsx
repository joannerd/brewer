import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Brewery from './brewery_index_item';
import { fetchBreweries, clearBreweries } from '../../actions/brewery_actions';
import Loading from '../loading';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

const BreweryIndex = () => {
  const dispatch = useDispatch();
  const breweries = useSelector((state) => Object.values(state.entities.breweries));
  window.scrollTo(0, 0);

  useEffect(() => {
    dispatch(fetchBreweries());
    return () => dispatch(clearBreweries());
  }, []);

  const clickAlpha = e => {
    document.getElementsByClassName(e.target.id)[0]
      .scrollIntoView({
        block: 'center',
      });
  };

  if (breweries.length < 49) return <Loading />;
  return (
    // TODO: ESLint
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
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
