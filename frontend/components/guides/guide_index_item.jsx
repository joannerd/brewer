import React from 'react';
import { Link } from 'react-router-dom';
import Brewery from '../breweries/brewery_index_item';

// if currentUser.id === guide.userId show update/delete

class Guide extends React.Component {

  render() {
    const guide = this.props.guide
    return (
      <div className="guide">
        <img src={guide.cityPhotoUrl} className="guide-photo city-photo" />
        <h1><Link to={`/guides/${guide.id}`}>{guide.title}</Link></h1>

        <Link to={`/guides/${guide.id}/edit`}>
          <button className="guide-update">
            Update
          </button>
        </Link>

        <h2>{guide.author}</h2>
        <p>{guide.body}</p>

        {guide.breweries.map((brewery, i) => (
          <div key={i} className="guide-brewery">
            <Brewery brewery={brewery} />
          </div>
        ))}

      </div>
    )
  }
}

export default Guide;