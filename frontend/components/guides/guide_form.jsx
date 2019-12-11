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
    this.props.fetchBreweries()
      .then(() => this.props.fetchCities())
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
      <form onSubmit={this.handleClick}>
        <h1>{this.props.formType}</h1>
          <input 
            type="text" 
            onChange={this.update('title')} 
            value={this.state.title} 
            placeholder="Title"
          />
          <textarea 
            onChange={this.update('body')} 
            value={this.state.body} 
            placeholder="Body"
          />

        <select onChange={this.update('cityId')} name="city">
          <option value="" selected disabled>Select City</option>
          {this.props.cities.map((city, i) => (
          <option value={city.id} key={i}>{city.name}, {city.state}</option>
          ))}
        </select>

        <select name="breweries">
          {this.props.breweries.filter(brewery => brewery.cityId === this.state.cityId).map((brewery, i) => (
          <option value={brewery.id} key={i}>{brewery.name}</option>
          ))}
        </select>

        <input type="submit" value={this.props.formType} />
      </form>
    )
  }
}

export default GuideForm;