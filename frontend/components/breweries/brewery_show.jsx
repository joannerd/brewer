import React, { useEffect } from 'react';
import Brewery from './brewery_index_item'

const BreweryShow = ({ brewery, fetchBrewery, match }) => {
  // const addressLink = brewery.address.split(" ").join("+");

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

BreweryShow.defaultProps = {
  brewery: {
    id: '',
    address: ''
  }
};

export default BreweryShow;