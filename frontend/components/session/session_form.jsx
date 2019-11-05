import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.props.history.push("/");
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  render() {
    if (this.props.currentUser) {
      return (
        <Redirect to="/" />
      );
    } else {
      return (
        <div className="form-container flex-center">

          <img src="https://www.wilsonfamilychiropracticcenter.net/wp-content/uploads/2018/12/placeholder-logo-2.png"/>

          <div className="links">
            <span className="session-link link">{this.props.formHeader}</span>
            <span className="session-link">
              <Link to={this.props.otherFormUrl} className="other">{this.props.otherForm}</Link>
            </span>
          </div>

          <form className="form flex-center" onSubmit={this.handleSubmit}>
            <input className="input" onChange={this.update("username")} placeholder="Username" type="text" name="username" value={this.state.username} />

            <input className="input" onChange={this.update("password")} placeholder="Password" type="password" name="password" value={this.state.password} />

            <input className={this.props.formType === "signup" ? "input" : "hidden"} onChange={this.update("email")} placeholder="Email" type="text" name="email" value={this.state.email} />

            <input className="input submit" type="submit" value={this.props.formHeader} />
          </form>

          <span className={this.props.formType === "login" ? "forgot-container" : "hidden"}>
            <a className="forgot">Forgot your username?</a> | <a className="forgot">Forgot your password?</a>
          </span>
        </div>
      );
    }
  }
}

export default SessionForm;