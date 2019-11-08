import React from 'react';
import Brewery from './brewery_index_item';

class BreweryIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBreweries();
  }

  render() {
    return (
      <section className="brewery-index">
        <h1>Breweries Index</h1>
        <ul className="brewery-index-list">
          {this.props.breweries.map((brewery, i) => (
            <Brewery key={i} brewery={brewery} />
          ))}
        </ul>
      </section>
    )
  }
}

export default BreweryIndex;