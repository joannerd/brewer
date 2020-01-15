import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Brewery from '../breweries/brewery_index_item';
import Map from '../map/map';

const GuideShow = ({ fetchGuide, match, guide, breweries }) => {
  const { cityPhotoUrl, id, title, author, body } = guide;

  window.scrollTo(0, 0);

  useEffect(() => {
    fetchGuide(match.params.guideId)
      .then(() => {
        Object.keys(guide.brewInfo).forEach(brewId => {
          document.getElementsByClassName(`${brewId}`)[0].addEventListener('click', () => {
            document.getElementById(`brewery${brewId}`).scrollIntoView({
              block: "start"
            });
          })
        })
      })
  }, []);

  return (guide === undefined) ? null : (
    <section className="guide-index-list">
      <Map guide={guide} />
      
      <div className="guide">
        <img src={cityPhotoUrl} className="city-photo" />
        <div className="guide-info">
          <h1><Link to={`/guides/${id}`}>{title}</Link></h1>
          <h2>{author}</h2>
          <p>{body}</p>
        </div>
        {breweries.map((brewery, i) => (
          <div id={`brewery${brewery.id}`} key={i} className="guide-brewery">
            <Brewery brewery={brewery} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default GuideShow;