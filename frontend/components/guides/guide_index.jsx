import React from 'react';
import Guide from './guide_index_item';
import GuideContainer from './guide_item_container';
import Map from '../map/map';

class GuideIndex extends React.Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   breweries: this.props.breweries
    // }
  }

  componentWillMount() {
    this.props.fetchBreweries();
    this.props.fetchGuides();
  }

  render() {
    return (
      <section className="guide-index">
        <Map />
        <ul className="guide-index-list">
          {this.props.guides.map((guide, i) => (
            <GuideContainer
              key={i}
              guide={guide}
              // breweries={this.state.breweries}
              // deleteGuide={this.props.deleteGuide}
            />
          ))}
        </ul>
      </section>
    )
  }
}

export default GuideIndex;