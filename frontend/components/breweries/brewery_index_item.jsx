import React from 'react';

class Brewery extends React.Component {
  constructor(props) {
    super(props);

    // if (this.props.brewery.id === '') {
    //   this.brewery = this.props.breweries[this.props.breweryId]
    // } else {
    //   this.brewery = this.props.brewery
    // }
  }

  render() {
    if (this.props.brewery.id === '') return null;

    const brewery = this.props.brewery
    const addressLink = brewery.address.split(" ").join("+")
    return (
      <>
        <h1>
          <a href={brewery.website} target="_blank">
            {brewery.name}
          </a>
        </h1>
        <h2>
          {brewery.address}
        </h2>
        <img src={brewery.photoUrl} className="brewery-photo" />
        <p>{brewery.description}</p>
        <a href={`https://www.google.com/maps/place/${addressLink}/`} target="_blank"><button className="gmap-link">
          Open in Google Maps
        </button></a>
      </>
    )
  }
}

Brewery.defaultProps = {
  brewery: {
    id: '',
    name: '',
    lat: '',
    lng: '',
    address: '',
    website: '',
    description: '',
    cityId: ''
  }
}

export default Brewery;