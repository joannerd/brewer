import React from 'react';
import { Link } from 'react-router-dom';
import Brewery from '../breweries/brewery_index_item';

// if currentUser.id === guide.userId show update/delete

class Guide extends React.Component {

  render() {
    const guide = this.props.guide
    return (
      <div className="guide">
        <h1><Link to={`/guides/${guide.id}`}>{guide.title}</Link></h1>
        <p>{guide.body}</p>

        {guide.breweries.map((brewery, i) => (
          <div className="guide-brewery">
            <Brewery key={i} brewery={brewery} />
          </div>
        ))}

        <div className="guide-links">
          <button onclick={`location.href = /guides/${guide.id}/edit`}
            className="guide-submit">
          {/* <Link to={`/guides/${guide.id}/edit`}> */}
              Update
          {/* </Link> */}
            </button>
          <button onClick={() => this.props.deleteGuide(guide.id)} className="guide-submit">Delete</button>
        </div>
      </div>
    )
  }
}

export default Guide;