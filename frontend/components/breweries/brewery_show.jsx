import React from 'react';
import Brewery from './brewery_index_item';
import Review from './review';

class BreweryShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      city: "",
      state: "",
      id: "",
      rating: 0,
      price: "",
      hours: "",
      reviewCount: 0,
      reviews: []
    };
  }

  componentDidMount() {
    const { fetchBrewery, fetchYelp, fetchYelpInfo, fetchYelpReviews, match } = this.props;

    fetchBrewery(match.params.breweryId)
      .then(res => {
        let place = Object.values(res.brewery)[0].address.split(" ");
        let address = place.slice(0, 3).join(" ");
        let city = place[3];
        let state = place[4][0] + place[5][0];

        this.setState({
          address,
          city,
          state,
        });

      }).then(() => {
        let { address, city, state } = this.state;

        fetchYelp(this.props.brewery.name, address, city, state)
          .then(res => {
            // let yelpId = res.yelp.businesses[0].id;
            this.setState({ id: res.yelp.businesses[0].id });
          }).then(() => {
            fetchYelpInfo(this.state.id)
              .then(res => {
                let { rating, price, hours, review_count } = res.yelpInfo;
                this.setState({
                  rating,
                  price,
                  hours,
                  reviewCount: review_count
                });
              });

            fetchYelpReviews(this.state.id)
              // .then(res => this.setState({ reviews: res.yelp.reviews }));
          });
      });
  }

  render() {
    const { yelp, brewery, reviews } = this.props;
    if (!yelp || reviews.length === 0) {
      return null;
    } else {
      const { rating, price, hours, review_count } = Object.values(yelp)[0];
      return (
        <div className="brewery show">
          <Brewery brewery={brewery} />
          <div className="brewery-yelp">
            <h3>Price Range: {price}</h3>
            <img src={`/${rating}.png`} className="yelp-stars"/>
            <h3>{review_count} reviews</h3>

            {reviews.map((review, i) => (
              <Review review={review} key={i} />
            ))}
          </div>
        </div>
      );
    }
  }
}

export default BreweryShow;