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
        {this.props.formType}
        <label>Title
          <input onChange={this.update('title')} type="text" value={this.state.title} />
        </label>
        <label>Body
          <textarea onChange={this.update('body')} value={this.state.body} />
        </label>

        <select onChange={this.update('city_id')} name="city">
          <option value="" selected disabled>Select City</option>
          {this.props.cities.map((city, i) => (
          <option value={city.id} key={i}>{city.name}, {city.state}</option>
          ))}
        </select>

        <select name="breweries">
          {this.props.breweries.map((brewery, i) => (
          <option value={brewery.id} key={i}>{brewery.name}</option>
          ))}
        </select>

        <input type="submit" value={this.props.formType} />
      </form>
    )
  }
}

export default GuideForm;