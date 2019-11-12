import React from 'react';
import { Link } from 'react-router-dom';
import Brewery from '../breweries/brewery_index_item';

class Guide extends React.Component {

  render() {
    const guide = this.props.guide
    return (
      <div className="guide">
        <h1><Link to={`/guides/${guide.id}`}>{guide.title}</Link></h1>
        <p>{guide.body}</p>

        <div className="brewery-index-list">
          {guide.breweries.map((brewery, i) => (
            <Brewery key={i} brewery={brewery} />
          ))}
        </div>

        <Link to={`/guides/${guide.id}/edit`}>
          <button className="guide-submit">
            Update Guide
          </button>
        </Link>
        <button onClick={() => this.props.deleteGuide(guide.id)} className="guide-submit">Delete Guide</button>
      </div>
    )
  }
}

export default Guide;