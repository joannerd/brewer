import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.props.history.push("/");
  }

  handleChange(e) {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  }

  render() {
    if (this.props.currentUser) {
      return (
        <Redirect to="/" />
      );
    } else {
      return (
        <div className="form-container">
          <div>
            <button className="button">{this.props.formHeader}</button>
            <button className="button other">
              <Link to={this.props.otherFormUrl}>{this.props.otherForm}</Link>
            </button>
          </div>

          <div className="form">
            <form onSubmit={this.handleSubmit}>
              <input className="input" onChange={this.handleChange} type="text" name="email" value="Email" /><br />

              <input className="input" onChange={this.handleChange} type="password" name="password" /><br />

              <input className="input submit" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      );
    }
  }
}

export default SessionForm;