import React from 'react';
import Guide from './guide_index_item';
import Map from '../map/map';

class GuideIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBreweries()
    .then(() => this.props.fetchGuides());
  }

  render() {
    return (
      <section className="guide-index">
        <Map />
        <ul className="guide-index-list">
          {this.props.guides.map((guide, i) => (
            <Guide
              key={i}
              guide={guide}
              breweries={this.props.breweries}
            />
          ))}
        </ul>
      </section>
    )
  }
}

export default GuideIndex;