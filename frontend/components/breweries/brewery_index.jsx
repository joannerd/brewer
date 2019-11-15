import React from 'react';
import Brewery from './brewery_index_item';
import Map from '../map/map';

class BreweryIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBreweries();
  }

  render() {
    if (this.props.breweries.length < 49) return null;
    return (
      <section className="brewery-index">
        <div className="brewery-index-list">
          {this.props.breweries.map((brewery, i) => (
            <div key={i} className="brewery">
              <Brewery
                breweryId={brewery.id}
                brewery={brewery}
                fetchBrewery={this.props.fetchBrewery}
              />
            </div>
          ))}
        </div>

        <div className="beer-diagram-container">
          <img src="./craftbeer.png" className="beer-diagram"/>
        </div>
      </section>
    )
  }
}

export default BreweryIndex;