import React from 'react';
import { Link } from "react-router-dom";
import Brewery from '../breweries/brewery_index_item';
import GuidePreview from '../guides/guide_index_item';

class CityShow extends React.Component {
  componentDidMount() {
    this.props.fetchCity(this.props.match.params.cityId);
  }

  render() {
    if (this.props.city === undefined) return null;
    if (this.props.guides.length === 0) return null;
    if (this.props.breweries.length === 0) return null;

    const { breweries, guides, city } = this.props;
    
    // const imgUrl = city.photoUrl
    // const divStyle = {
    //   backgroundImage: `url('${imgUrl}')`,
    // };

    return (
      <div className="city-show">
        <div className="guide city-guides">
          <h1>{city.name} Guides</h1>
          {guides.map(guide => (
            <Link to={`/guides/${guide.id}`}>
              <h1>{guide.title}</h1>
              <h2>{guide.author}</h2>
            </Link>
          ))}
        </div>

        <div className="guide city-breweries">
          {breweries.map(brewery => (
            <>
              <h1>
                <a href={brewery.website} target="_blank">
                  {brewery.name}
                </a>
              </h1>
              <h2>{brewery.address}</h2>
              <img src={brewery.photoUrl} className="brewery-photo" />
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default CityShow;