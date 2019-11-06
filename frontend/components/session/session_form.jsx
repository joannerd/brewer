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
    this.handleDemo = this.handleDemo.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push("/"));
  }

  handleDemo(e) {
    e.preventDefault();
    this.setState({ username: "demo_user", password: "123456", email: "demo@email.com" }, () => {
      const user = Object.assign({}, this.state);
      this.props.processForm(user)
        .then(() => this.props.history.push("/"));
    });
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  render() {
    return (
      <div className="form-container flex-center">

        <span className="logo">BREWER</span>        

        <div className="links">
          <Link to="/login" className="session-link"><span className={this.props.formType === "login" ? "active" : "inactive"}>LOG IN</span>
          </Link>

          <Link to="/signup" className="session-link"><span className={this.props.formType === "signup" ? "active" : "inactive"}>SIGN UP</span>
          </Link>
        </div>

        <form className="form flex-center">
          <input
            className="input"
            onChange={this.update("username")}
            placeholder="Username"
            type="text"
            name="username"
            value={this.state.username}
          />

          <input
            className="input"
            onChange={this.update("password")}
            placeholder="Password"
            type="password"
            name="password"
            value={this.state.password}
          />

          <input
            className={this.props.formType === "signup" ? "input" : "hidden"}
            onChange={this.update("email")}
            placeholder="Email"
            type="text"
            name="email" 
            value={this.state.email}
          />

          <input
            className="input submit"
            onClick={this.handleSubmit}
            type="submit"
            value={this.props.formHeader}
          />

          <input
            className={this.props.formType === "login" ? "input submit" : "hidden"}
            onClick={this.handleDemo}
            type="submit"
            value="Demo Login"
          />
        </form>

        <span className={this.props.formType === "login" ? "forgot-container" : "hidden"}>
          <a className="forgot">Forgot your username?</a> | <a className="forgot">Forgot your password?</a>
        </span>
      </div>
    );
  }
}

export default SessionForm;