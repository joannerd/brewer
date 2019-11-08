import React from 'react';
import City from './city_index_item';

class CityIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCities();
  }

  render() {
    return (
      <section className="city-index">
        <ul className="city-index-list">
          <h1>Cities Index</h1>
          {this.props.cities.map((city, i) => (
            <City city={city} key={i}/>
          ))}
        </ul>

        {/* <BreweryMap breweries={this.props.breweries} /> */}
        <div id="map-container" ref="map">
          <h3>Brewery Map</h3>
          <div id="map" ref="...">
          </div>
        </div>
      </section>
    )
  }
}

export default CityIndex;