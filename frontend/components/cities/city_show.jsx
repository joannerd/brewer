import React from 'react';
import { Link } from "react-router-dom";

class CityShow extends React.Component {
  componentDidMount() {
    this.props.fetchCity(this.props.match.params.cityId);
  }

  render() {
    if (this.props.city === undefined || this.props.guides.length === 0 || this.props.breweries.length === 0) return null;

    const { breweries, guides, city } = this.props;
    return (
      <div className="city-show">
        <div className="city-guides">
          <h1>{city.name} Guides</h1>
          {guides.map((guide, i) => (
            <Link to={`/guides/${guide.id}`} key={i}>
              <h2>{guide.title}</h2>
              <h3>{guide.author}</h3>
            </Link>
          ))}
        </div>

        <div className="city-breweries">
          <h1>{city.name} Breweries</h1>
          {breweries.map((brewery, i) => (
            <a href={brewery.website} target="_blank" key={i}>
              <h2>{brewery.name}</h2>
              <img src={brewery.photoUrl} className="brewery-photo" />
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default CityShow;