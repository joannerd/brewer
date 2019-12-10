import React from 'react';
import Brewery from './brewery_index_item';

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

class BreweryIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBreweries()
      .then(() => {
        alphabet.forEach(alpha => {
          document.getElementById(alpha).addEventListener('click', () => {
            document
              .getElementsByClassName(alpha)[0]
              .scrollIntoView({
                block: "center"
              });
          });
        })
      })
  }

  render() {
    if (this.props.breweries.length < 49) return null;
    return (
      <section className="brewery-index">
        <div className="brewery-nav">
          {alphabet.map((alpha, i) => (
            <li key={i} id={alpha}>
              {alpha[0]}
            </li>
          ))}
        </div>
        <div className="brewery-index-list">
          {this.props.breweries.map((brewery, i) => (
            <div key={i} className={`brewery ${brewery.name[0]}`}>
              <Brewery
                breweryId={brewery.id}
                brewery={brewery}
                fetchBrewery={this.props.fetchBrewery}
              />
            </div>
          ))}
          <div className="Z"></div>
        </div>

        <div className="beer-diagram-container">
          <img src="./craftbeer.png" className="beer-diagram" />
        </div>
      </section>
    );
  }
}

export default BreweryIndex;