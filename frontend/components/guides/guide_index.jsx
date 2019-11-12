import React from 'react';
import Guide from './guide_index_item';
import Map from '../map/map';

class GuideIndex extends React.Component {
  componentDidMount() {
    this.props.fetchGuides();
  }

  render() {
    return (
      <section className="guide-index">
        <Map places={this.props.guides.breweries} />
        <ul className="guide-index-list">
          {this.props.guides.map((guide, i) => (
            <Guide
              guide={guide}
              key={i}
              deleteGuide={this.props.deleteGuide}
            />
          ))}
        </ul>
      </section>
    )
  }
}

export default GuideIndex;