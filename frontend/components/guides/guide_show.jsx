/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, useHistory } from 'react-router-dom';
import { fetchGuide, clearGuide, deleteGuide } from '../../actions/guide_actions';
import Brewery from '../breweries/brewery_index_item';
import Map from '../map/map';
import Loading from '../loading';

const GuideShow = () => {
  const { guideId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const breweries = useSelector(state => Object.values(state.entities.breweries));
  const guide = useSelector(state => state.entities.guides[guideId]);
  const currentUserId = useSelector(state => parseInt(state.session.id, 10));

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchGuide(guideId));
    return () => dispatch(clearGuide());
  }, [guideId]);

  if (!guide) return <Loading />;

  const {
    id, cityPhotoUrl, title, author, body,
  } = guide;

  const handleDelete = () => {
    dispatch(deleteGuide(id)).then(() => {
      history.push('/guides');
    });
  };

  const deleteButton = (guide.userId === currentUserId) ? (
    <button id="guide-delete" onClick={handleDelete}>Delete</button>
  ) : (
    null
  );

  const clickMarker = e => {
    if (e.target.className.includes('marker')) {
      document
        .getElementById(`brewery${e.target.id}`)
        .scrollIntoView({ block: 'center' });
    }
  };

  return (
    <section className="guide-index-list" onClick={clickMarker}>
      <Map guide={guide} />

      <div className="guide">
        <img src={cityPhotoUrl} className="city-photo" alt={title} />
        <div className="guide-info">
          <h1>
            <Link to={`/guides/${id}`}>{title}</Link>
          </h1>
          <h2>{author}</h2>
          <p>{body}</p>
          {deleteButton}
        </div>
        {breweries.map((brewery) => (
          <div
            id={`brewery${brewery.id}`}
            key={brewery.id}
            className="guide-brewery"
          >
            <Brewery brewery={brewery} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GuideShow;
