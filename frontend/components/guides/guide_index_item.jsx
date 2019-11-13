import React from 'react';
import { Link } from 'react-router-dom';
import Brewery from '../breweries/brewery_index_item';


class Guide extends React.Component {
  render() {
    const guide = this.props.guide;
    const breweries = this.props.breweries;
    return (
      <div className="guide">
        <img src={guide.cityPhotoUrl} className="city-photo" />

        <div className="guide-info">
          <h1><Link to={`/guides/${guide.id}`}>{guide.title}</Link></h1>
          <h2>{guide.author}</h2>
          <p>{guide.body}</p>
        </div>

        {guide.breweryIds.map((breweryId, i) => (
          <div key={i} className="guide-brewery">
            <Brewery breweryId={breweryId} breweries={breweries} />
          </div>
        ))}

      </div>
    )
  }
}

export default Guide;