import React from 'react';
import { Link } from 'react-router-dom';


class GuidePreview extends React.Component {
  render() {
    const guide = this.props.guide;
    const divStyle = {
      backgroundImage: `url('${guide.cityPhotoUrl}')`,
    };

    return (
      <Link
        to={`/guides/${guide.id}`}
        style={divStyle}
        className="guide-preview"
      >
        <div className="guide-preview-info">
          <h1>{guide.title}</h1>
          <h2>{guide.author}</h2>
          <p>{guide.body}</p>
        </div>
      </Link>
    );
  }
}

export default GuidePreview;