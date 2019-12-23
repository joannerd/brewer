import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// const SessionForm = ({ history, processForm, clearErrors, errors, formType, formHeader }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');

//   useEffect(() => {
//     clearErrors();
//   }, [])

//   function handleSubmit(e) {
//     e.preventDefault();
//     const user = {
//       username,
//       password,
//       email
//     }
//     processForm(user)
//       .then(() => history.push("/"));
//   }

//   function handleDemo(e) {
//     e.preventDefault();

//     let i = 0;
//     let j = 0;
//     let demoUsername = "JoannaChen";
//     let demoPassword = "123456";

//     const typeUser = () => {
//       let timeout;
//       if (i < demoUsername.length) {
//         document.getElementById("username").value += demoUsername.charAt(i);
//         i++;
//         timeout = setTimeout(typeUser, 100);
//       } else {
//         clearTimeout(timeout);
//       }
//     }

//     const typePw = () => {
//       let timeout;
//       if (j < demoPassword.length) {
//         document.getElementById("password").value += demoPassword.charAt(j);
//         j++;
//         timeout = setTimeout(typePw, 100);
//       } else {
//         clearTimeout(timeout);
//       }
//     }

//     if (formType === 'login') {
//       typeUser();
//       window.setTimeout(() => typePw(), 1000)
      
//       window.setTimeout(() => {
//         // this.setState({ username: "JoannaChen", password: "123456", email: "demo@email.com" }
      
//         const user = {
//           username,
//           password,
//           email
//         }
//         processForm(user)
//           .then(() => history.push("/"));
//         ;
//       }, 1600)
//     }
//   }

//   function update(field) {
//     return e => this.setState({[field]: e.target.value});
//   }

//   return (
//     <div className="form-container flex-center">
//       <span className="logo">BREWER</span>        

//       <div className="links">
//         <Link to="/login" className="session-link"><span className={formType === "login" ? "active" : "inactive"}>LOG IN</span>
//         </Link>

//         <Link to="/signup" className="session-link"><span className={formType === "signup" ? "active" : "inactive"}>SIGN UP</span>
//         </Link>
//       </div>
//       <br/>

//       <div>
//         { errors.map((err, i) => (
//           <div className="user-auth-errors" key={i}>
//             {err}
//           </div>
//         ))}
//       </div>

//       <form className="form flex-center" autoComplete="off">
//         <input
//           id="username"
//           className="input" 
//           onChange={this.update("username")}
//           placeholder="Username"
//           type="text"
//           name="username"
//           value={this.state.username}
//         />

//         <input
//           id="password"
//           className="input"
//           onChange={this.update("password")}
//           placeholder="Password"
//           type="password"
//           name="password"
//           value={this.state.password}
//         />

//         <input
//           className={formType === "signup" ? "input email" : "hidden"}
//           onChange={this.update("email")}
//           placeholder="Email"
//           type="text"
//           name="email" 
//           value={this.state.email}
//         />

//         <input
//           className="input submit"
//           onClick={this.handleSubmit}
//           type="submit"
//           value={formHeader}
//         />

//         <input
//           className={formType === "login" ? "input submit" : "hidden"}
//           onClick={this.handleDemo}
//           type="submit"
//           value="Demo Login"
//         />
//       </form>
//     </div>
//   );
// }

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

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push("/"));
  }

  handleDemo(e) {
    e.preventDefault();

    let i = 0;
    let j = 0;
    let demoUsername = "JoannaChen";
    let demoPassword = "123456789";

    const typeUser = () => {
      let timeout;
      if (i < demoUsername.length) {
        document.getElementById("username").value += demoUsername.charAt(i);
        i++;
        timeout = setTimeout(typeUser, 100);
      } else {
        clearTimeout(timeout);
      }
    }

    const typePw = () => {
      let timeout;
      if (j < demoPassword.length) {
        document.getElementById("password").value += demoPassword.charAt(j);
        j++;
        timeout = setTimeout(typePw, 100);
      } else {
        clearTimeout(timeout);
      }
    }

    if (this.props.formType === 'login') {
      typeUser();
      window.setTimeout(() => typePw(), 1000)
      
      window.setTimeout(() => {
        this.setState({ username: "JoannaChen", password: "123456789" }, () => {
          const user = Object.assign({}, this.state);
          this.props.processForm(user)
            .then(() => this.props.history.push("/"));
        });
      }, 1600)
    }
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
        <br/>

        <div>
          { this.props.errors.map((err, i) => (
            <div className="user-auth-errors" key={i}>
              {err}
            </div>
          ))}
        </div>

        <form className="form flex-center">
          <input
            id="username"
            className="input" 
            onChange={this.update("username")}
            placeholder="Username"
            type="text"
            name="username"
            value={this.state.username}
          />

          <input
            id="password"
            className="input"
            onChange={this.update("password")}
            placeholder="Password"
            type="password"
            name="password"
            value={this.state.password}
          />

          <input
            className={this.props.formType === "signup" ? "input email" : "hidden"}
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
      </div>
    );
  }
}

export default SessionForm;