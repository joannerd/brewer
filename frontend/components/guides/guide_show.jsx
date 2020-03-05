import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Brewery from '../breweries/brewery_index_item';
import Map from '../map/map';
import Loading from '../loading';

const GuideShow = ({ fetchGuide, match, guide, breweries }) => {
  window.scrollTo(0, 0);

  useEffect(() => {
    fetchGuide(match.params.guideId);
  }, [match.params.guideId]);

  const clickMarker = e => {
    if (e.target.className.includes("marker"))
      document.getElementById(`brewery${e.target.id}`)
        .scrollIntoView({
          block: "center"
        });
  }

  return (guide === undefined) ? <Loading /> : (
    <section className="guide-index-list" onClick={clickMarker}>
      <Map guide={guide} />
      
      <div className="guide">
        <img src={guide.cityPhotoUrl} className="city-photo" />
        <div className="guide-info">
          <h1><Link to={`/guides/${guide.id}`}>{guide.title}</Link></h1>
          <h2>{guide.author}</h2>
          <p>{guide.body}</p>
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