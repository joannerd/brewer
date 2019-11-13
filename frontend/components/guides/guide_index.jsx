import React from 'react';
import GuideShow from './guide_show';
import GuidePreview from './guide_index_item';

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
          // <GuideShow
          //   key={i}
          //   guide={guide}
          // />
        ))}
      </div>
    )
  }
}

export default GuideIndex;