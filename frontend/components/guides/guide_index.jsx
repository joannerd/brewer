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

  componentDidMount() {
    console.log('this is before fetch in GI#cDM')
    this.props.fetchBreweries()
    .then(() => this.props.fetchGuides());


    // console.log('this is before fetchGuides in GI#cDM')
    // this.props.fetchGuides()
    // .then(res => console.log('this is GuideIndex#compononentDidMount'));
    //   //() => this.props.fetchBreweries());
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
              // deleteGuide={this.props.deleteGuide}
            />
          ))}
        </ul>
      </section>
    )
  }
}

export default GuideIndex;