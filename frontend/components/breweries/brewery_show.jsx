import React, { useEffect } from 'react';
import Brewery from './brewery_index_item'

const BreweryShow = ({ brewery, fetchBrewery, match }) => {
  if (match) {
    useEffect(() => {
      fetchBrewery(match.params.breweryId);
    }, [match.params.breweryId]);
  }

  return (
    <div className="brewery show">
      <Brewery brewery={brewery} />
    </div>
  );
}

export default BreweryShow;