import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const CityShow = (props) => {
  const { breweries, guides, city, fetchCity, match } = props;

  useEffect(() => {
    fetchCity(match.params.cityId)
  }, [fetchCity, match])

  if (
    city === undefined
  ) return null;

  const cityGuides = 
    guides === undefined ? 
      <h2>There are no guides for this city yet.</h2> :
      <div className="city-show-guides">
        {guides.map((guide, i) => (
          <Link to={`/guides/${guide.id}`} key={i} className="guide-link">
            <h2>{guide.title}</h2>&nbsp;by&nbsp;<h3>{guide.author}</h3>
          </Link>
        ))}
      </div>

  const cityBreweries = 
    breweries === undefined ? 
      <h2>There are no breweries for this city yet.</h2> :
      <div className="city-show-breweries">
        {breweries.map((brewery, i) => (
          <a href={brewery.website} target="_blank" key={i}>
            <h2>{brewery.name}</h2>
          </a>
        ))}
      </div>

  return (
    <div className="city-show">
      <img src={city.photoUrl} alt={city.name} />
      <h1>{city.name} Guides</h1>
      {cityGuides}

      <h1>{city.name} Breweries</h1>
      {cityBreweries}
    </div>
  );
}

export default CityShow;