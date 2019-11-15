import React from 'react';
import { Link } from 'react-router-dom';


class GuidePreview extends React.Component {
  render() {
    const guide = this.props.guide;
    const divStyle = {
      backgroundImage: `url('${guide.cityPhotoUrl}')`,
    };

    return (
      <div style={divStyle} className="guide-preview">
        <Link to={`/guides/${guide.id}`}>
          <div className="guide-preview-info">
              <h1>{guide.title}</h1>
              <h2>{guide.author}</h2>
              <p>{guide.body}</p>
              <br/>
              <span className="read-more">Read More</span>
          </div>
        </Link>
      </div>
    )
  }
}

export default GuidePreview;