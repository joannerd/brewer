import React, { useEffect } from 'react';
import GuidePreview from './guide_index_item';

const GuideIndex = ({ guides, fetchGuides, fetchGuide }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchGuides();
  }, [guides])

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
  )
}

export default GuideIndex;