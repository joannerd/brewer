import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const GuidePreview = ({ guide }) => {
  const {
    id, cityPhotoUrl, title, author,
  } = guide;
  const divStyle = {
    backgroundImage: `url('${cityPhotoUrl}')`,
  };

  return (
    <Link
      to={`/guides/${id}`}
      style={divStyle}
      className="guide-preview"
    >
      <div className="guide-preview-info">
        <h1>{title}</h1>
        <h2>
          by
          {author}
        </h2>
      </div>
    </Link>
  );
};

GuidePreview.propTypes = {
  guide: PropTypes.object.isRequired,
};

export default GuidePreview;
