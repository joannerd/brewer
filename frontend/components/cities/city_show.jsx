import React from 'react';
import { Link } from 'react-router-dom';
import Brewery from '../breweries/brewery_index_item';
import GuidePreview from '../guides/guide_index_item';

class CityShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCity(this.props.match.params.cityId);
  }

  render() {
    if (this.props.city === undefined) return null;
    if (this.props.guides.length === 0) return null;
    if (this.props.breweries.length === 0) return null;

    const { breweries, guides, city } = this.props;
    
    const imgUrl = city.photoUrl
    const divStyle = {
      backgroundImage: `url('${imgUrl}')`,
    };

    return (
      <section className="city-show">
        {/* <h1>{city.name}</h1>
        
        <div>
          {guides.map((guide, i) => (
            <GuidePreview guide={guide} key={i} />
          ))}
        </div>

        <div className="guide">
          {breweries.map((brewery, i) => (
            <Brewery breweryId={brewery.id} key={i} breweries={breweries}/>
          ))}
        </div> */}
      </section>
    )
  }
}

export default CityShow;