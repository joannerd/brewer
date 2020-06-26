import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchCity } from '../../actions/city_actions';
import Loading from '../loading';

const CityShow = ({ match }) => {
  const dispatch = useDispatch();
  const city = useSelector(state => state.entities.cities[match.params.cityId]);
  const breweries = useSelector(state => Object.values(state.entities.breweries));
  const guides = useSelector(state => Object.values(state.entities.guides));

  useEffect(() => {
    dispatch(fetchCity(match.params.cityId));
  }, [match.params.cityId]);

  if (city === undefined) return <Loading />;
  const { name, photoUrl } = city;

  const cityGuides = guides.length === 0
    ? <h2>There are no guides for this city yet.</h2> : (
      <>
        {
          guides.map((guide, i) => (
            <Link to={`/guides/${guide.id}`} key={i} className="guide-link">
              <h2>{guide.title}</h2>
              &nbsp;by&nbsp;
              <h3>{guide.author}</h3>
            </Link>
          ))
        }
      </>
    );

  const cityBreweries = breweries.length === 0
    ? <h2>There are no breweries for this city yet.</h2> : (
      <>
        {
          breweries.map((brewery, i) => (
            <Link to={`/breweries/${brewery.id}`} key={i}>
              <h2>{brewery.name}</h2>
            </Link>
          ))
        }
      </>
    );

  return (
    <div className="city-show">
      <img src={photoUrl} alt={name} />
      <h1>
        {name}
        Guides
      </h1>
      <div className="city-show-guides">
        {cityGuides}
      </div>

      <h1>
        {name}
        Breweries
      </h1>
      <div className="city-show-breweries">
        {cityBreweries}
      </div>
    </div>
  );
};

CityShow.propTypes = {
  match: PropTypes.object.isRequired,
  breweries: PropTypes.array.isRequired,
  guides: PropTypes.array.isRequired,
  city: PropTypes.object,
  fetchCity: PropTypes.func.isRequired,
};

export default CityShow;
