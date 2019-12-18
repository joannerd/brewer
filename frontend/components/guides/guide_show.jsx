import React from 'react';
import { Link } from 'react-router-dom';
import Brewery from '../breweries/brewery_index_item';
import Map from '../map/map';

class GuideShow extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchGuide(this.props.match.params.guideId)
      .then(() => {
        const brewIds = Object.keys(this.props.guide.brewInfo)
        brewIds.forEach(brewId => {
          document.getElementsByClassName(`${brewId}`)[0].addEventListener('click', () => {
            document.getElementById(`brewery${brewId}`).scrollIntoView({
              block: "start"
            });
          })
        })
      })
  }
  
  render() {
    if (this.props.guide === undefined) return null;
    const { breweries, guide } = this.props;    
    return (
      <section className="guide-index-list">
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
    )
  }
}

export default GuideShow;