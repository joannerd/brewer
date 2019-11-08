import React from 'react';
import Brewery from './brewery_index_item';
import Map from '../map/map';

class BreweryIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBreweries();
  }

  render() {
    return (
      <section className="brewery-index">
        <div className="brewery-index-list">
          {this.props.breweries.map((brewery, i) => (
            <Brewery key={i} brewery={brewery} />
          ))}
        </div>
        {/* <Map places={this.props.breweries} /> */}
      </section>
    )
  }
}

export default BreweryIndex;