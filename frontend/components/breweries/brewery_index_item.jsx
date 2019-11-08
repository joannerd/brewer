import React from 'react';
import { Link } from 'react-router-dom';

class Brewery extends React.Component {

  render() {
    const addressLink = this.props.brewery.address.split(" ").join("+")
    return (
      <ul className="brewery">
        <li>
          <a href={`https://www.${this.props.brewery.website}`} target="_blank">{this.props.brewery.name}</a>
        </li>
        <li>
          <a href={`https://www.google.com/maps/place/${addressLink}/`} target="_blank">{this.props.brewery.address}</a>        
        </li>
        <li>
          <p>
            "With beer on a pedestal and adventure up our sleeve, we set out to craft style-defining New England beers that highlight paramount traits of quality ingredients. Like us, our beers are elegant yet raw, free-spirited yet sophisticated. Beer has a unique ability to bring all kinds of people together, from the Lords that only enjoy the finer things in life, to the Hobos that work hard to earn their small pleasures, great beer is an accessible luxury.

            Proudly brewed in Massachusetts, we’re bringing the New England beer experience to thirsty fans everywhere. We relish in the connection and find sanctuary in the beers that unite us. — Lords and Hobos alike, we all deserve to drink like royalty."
          </p>
        </li>
      </ul>
    )
  }
}

export default Brewery;