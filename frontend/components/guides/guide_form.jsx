import React from 'react';

class GuideForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.guide;
    this.handleClick = this.handleClick.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    if (this.props.formType === 'Update Form') this.props.fetchGuide(this.props.match.params.guideId);
    // this.props.fetchBreweries()
    //   .then(() => this.props.fetchCities())
  }

  handleClick(e) {
    e.preventDefault();
    this.props.formAction(this.state);
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  render() {
    return (
      <form className="guide-form" onSubmit={this.handleClick}>
        <h1>{this.props.formType}</h1>
        <input
          type="text"
          onChange={this.update("title")}
          value={this.state.title}
          placeholder="Title"
        />
        <textarea
          onChange={this.update("body")}
          value={this.state.body}
          placeholder="Body"
        />

        <input type="hidden" name=""/>

        <div className="breweries-select">
          <select onChange={this.update("cityId")} name="city">
            <option selected disabled>
              City
            </option>
            {this.props.cities.map((city, i) => (
              <option value={city.id} key={i}>
                {city.name}, {city.state}
              </option>
            ))}
          </select>

          {[...Array(5).keys()].map((breweryNum, i) => (
            <select name={`brewery-${breweryNum + 1}`} key={i}>
              <option selected disabled>
                Brewery #{breweryNum + 1}
              </option>
              {this.props.breweries
                .filter(brewery => brewery.cityId === this.state.cityId)
                .map((brewery, i) => (
                  <option value={brewery.id} key={i}>
                    {brewery.name}
                  </option>
                ))}
            </select>
          ))}
        </div>

        <input className="submit" type="submit" value={this.props.formType} />
      </form>
    );
  }
}

export default GuideForm;