import React from 'react';
import City from './city_index_item';

class CityIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCities();
  }

  render() {
    return (
      <section className="city-index">
        <h1>Cities Index</h1>
        <ul className="city-index-list">
          {this.props.cities.map((city, i) => (
            <City city={city} key={i}/>
          ))}
        </ul>
      </section>
    )
  }
}

export default CityIndex;