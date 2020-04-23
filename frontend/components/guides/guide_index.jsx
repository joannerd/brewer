import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import GuidePreview from './guide_index_item';

const GuideIndex = ({
  guides, fetchGuides, fetchGuide,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchGuides();
  }, []);

  return (
    <div className="guide-index">
      {guides.map((guide, i) => (
        <GuidePreview
          key={i}
          guide={guide}
          fetchGuide={fetchGuide}
        />
      ))}
    </div>
  );
};

GuideIndex.propTypes = {
  guides: PropTypes.array.isRequired,
  fetchGuides: PropTypes.func.isRequired,
  fetchGuide: PropTypes.func.isRequired,
};

export default GuideIndex;
