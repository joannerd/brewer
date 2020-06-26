import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGuides } from '../../actions/guide_actions';
import GuidePreview from './guide_index_item';

const GuideIndex = () => {
  const dispatch = useDispatch();
  const guides = useSelector(state => Object.values(state.entities.guides));

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchGuides());
  }, []);

  return (
    <div className="guide-index">
      {guides.map((guide) => (
        <GuidePreview
          key={guide.id}
          guide={guide}
        />
      ))}
    </div>
  );
};

export default GuideIndex;
