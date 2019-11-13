import React from 'react';
import Guide from './guide_index_item';
import GuidePreview from './guide_preview';
import Map from '../map/map';

class GuideIndex extends React.Component {
  componentDidMount() {
    this.props.fetchGuides();
  }

  render() {
    return (
      <div className="guide-index">
        {this.props.guides.map((guide, i) => (
          <GuidePreview
            key={i}
            guide={guide}
            fetchGuide={this.props.fetchGuide}
          />
          // <Guide
          //   key={i}
          //   guide={guide}
          // />
        ))}
      </div>
    )
  }
}

export default GuideIndex;