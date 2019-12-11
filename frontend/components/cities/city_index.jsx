import React from 'react';
import City from './city_index_item';

class CityIndex extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchCities();
  }

  render() {
    return (
      <section className="city-index">
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