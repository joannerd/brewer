import React from 'react';
import { Link } from 'react-router-dom';
import Brewery from '../breweries/brewery_index_item';
import MapContainer from '../map/map_container';

class GuideShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGuide(this.props.match.params.guideId);
  }
  
  render() {
    if (this.props.guide === undefined) return null;

    const { breweries, guide } = this.props;
    return (
      <section className="guide-index-list">
        <MapContainer
          guide={guide} 
        />
        
        <div className="guide">
          <img src={guide.cityPhotoUrl} className="city-photo" />

          <div className="guide-info">
            <h1><Link to={`/guides/${guide.id}`}>{guide.title}</Link></h1>
            <h2>{guide.author}</h2>
            <p>{guide.body}</p>
          </div>

          {guide.breweryIds.map((breweryId, i) => (
            <div key={i} className="guide-brewery">
              <Brewery
                breweryId={breweryId}
                breweries={breweries}
                fetchBrewery={this.props.fetchBrewery} />
            </div>
          ))}

        </div>
      </section>
    )
  }
}

export default GuideShow;