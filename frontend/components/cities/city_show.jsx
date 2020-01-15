import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const CityShow = ({ match, breweries, guides, city, fetchCity }) => {
  useEffect(() => {
    fetchCity(match.params.cityId)
  }, [match.params.cityId])

  if (city === undefined) return null;

  const cityGuides = 
    guides.length === 0 ? 
      <h2>There are no guides for this city yet.</h2> : <>{
        guides.map((guide, i) => (
          <Link to={`/guides/${guide.id}`} key={i} className="guide-link">
            <h2>{guide.title}</h2>&nbsp;by&nbsp;<h3>{guide.author}</h3>
          </Link>
        ))} </>

  const cityBreweries = 
    breweries.length === 0 ? 
      <h2>There are no breweries for this city yet.</h2> : <> {
        breweries.map((brewery, i) => (
          <a href={brewery.website} target="_blank" key={i}>
            <h2>{brewery.name}</h2>
          </a>
        ))} </>

  return (
    <div className="city-show">
      <img src={city.photoUrl} alt={city.name} />
      <h1>{city.name} Guides</h1>
      <div className="city-show-guides">
        {cityGuides}
      </div>

      <h1>{city.name} Breweries</h1>
      <div className="city-show-breweries">
        {cityBreweries}
      </div>
    </div>
  );
}

export default CityShow;