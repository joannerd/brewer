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
        <div className="guide-preview-info">
          <h1><Link to={`/guides/${guide.id}`}>{guide.title}</Link></h1>
          <h2>{guide.author}</h2>
          <p>{guide.body}</p>
          <br/>
          <Link to={`/guides/${guide.id}`} className="read-more">Read More</Link>
        </div>
      </div>
    )
  }
}

export default GuidePreview;