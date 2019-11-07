// import React from 'react';

// class Brewery extends React.Component {
//   componentDidMount() {
//     this.props.fetchBrewery(this.props.match.params.breweryId)
//   }

//   render() {
//     const addressLink = this.props.brewery.address.split(" ").join("+")
//     return (
//       <section className="brewery">
//         <ul>
//           <li>
//             <Link to="/brewerywebsite">
//               {this.props.brewery.name}
//             </Link>
//           </li>
//           <li>
//             <Link to={`https://www.google.com/maps/place/${addressLink}/`}>
//               {this.props.brewery.address}
//             </Link>
//           </li>
//         </ul>

//         <p>
//           "With beer on a pedestal and adventure up our sleeve, we set out to craft style-defining New England beers that highlight paramount traits of quality ingredients. Like us, our beers are elegant yet raw, free-spirited yet sophisticated. Beer has a unique ability to bring all kinds of people together, from the Lords that only enjoy the finer things in life, to the Hobos that work hard to earn their small pleasures, great beer is an accessible luxury.

//           Proudly brewed in Massachusetts, we’re bringing the New England beer experience to thirsty fans everywhere. We relish in the connection and find sanctuary in the beers that unite us. — Lords and Hobos alike, we all deserve to drink like royalty."
//         </p>
//       </section>
//     )
//   }
// }