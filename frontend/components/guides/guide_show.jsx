import React from 'react';
import { Link } from 'react-router-dom';
import Brewery from '../breweries/brewery_index_item';
import Map from '../map/map';


class GuideShow extends React.Component {
  componentDidMount() {
    this.props.fetchGuide(this.props.match.params.guideId)
  }
  
  render() {
    const guide = this.props.guide;
    const breweries = this.props.breweries;
    return (
      <section className="guide-index-list">
        <Map />
        
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

GuideShow.defaultProps = {
  // breweries: [],
  guide: {
    id: 'default',
    title: 'default',
    body: 'default',
    author: 'default',
    breweryIds: [],
    ciyPhotoUrl: 'default',
    userId: 'default'
  }
}


export default GuideShow;