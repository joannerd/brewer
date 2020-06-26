import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SessionForm = ({
  clearErrors,
  processForm,
  history,
  formType,
  errors,
  formHeader,
}) => {
  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
  });

  useEffect(() => {
    clearErrors();
  }, [history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await processForm(user);
    history.push('/');
  };

  const handleDemo = (e) => {
    e.preventDefault();

    let i = 0;
    let j = 0;
    const demoUsername = 'DemoUser';
    const demoPassword = '123456';

    const typeUser = () => {
      let timeout;
      if (i < demoUsername.length) {
        document.getElementById('username').value += demoUsername.charAt(i);
        i += 1;
        timeout = setTimeout(typeUser, 100);
      } else {
        clearTimeout(timeout);
      }
    };

    const typePw = () => {
      let timeout;
      if (j < demoPassword.length) {
        document.getElementById('password').value += demoPassword.charAt(j);
        j += 1;
        timeout = setTimeout(typePw, 100);
      } else {
        clearTimeout(timeout);
      }
    };

    if (formType === 'login') {
      typeUser();
      window.setTimeout(() => typePw(), 1000);
      window.setTimeout(() => {
        const demoUser = {
          username: 'DemoUser',
          password: '123456',
        };
        processForm(demoUser)
          .then(() => history.push('/'));
      }, 1600);
    }
  };

  const update = (field) => e => setUser({ [field]: e.target.value });

  return (
    <div className="form-container flex-center">
      <span className="logo">BREWER</span>

      <div className="links">
        <Link to="/login" className="session-link">
          <span className={formType === 'login' ? 'active' : 'inactive'}>LOG IN</span>
        </Link>

        <Link to="/signup" className="session-link">
          <span className={formType === 'signup' ? 'active' : 'inactive'}>SIGN UP</span>
        </Link>
      </div>
      <br />

      <div>
        { errors.map((err, i) => (
          <div className="user-auth-errors" key={i}>
            {err}
          </div>
        ))}
      </div>

      <form className="form flex-center">
        <input
          id="username"
          className="input" 
          onChange={update("username")}
          placeholder="Username"
          type="text"
          name="username"
          value={user.username}
        />

        <input
          id="password"
          className="input"
          onChange={update('password')}
          placeholder="Password"
          type="password"
          name="password"
          value={user.password}
        />

        <input
          className={formType === 'signup' ? 'input email' : 'hidden'}
          onChange={update('email')}
          placeholder="Email"
          type="text"
          name="email" 
          value={user.email}
        />

        <input
          className="input submit"
          onClick={handleSubmit}
          type="submit"
          value={formHeader}
        />

        <input
          className={formType === 'login' ? 'input submit' : 'hidden'}
          onClick={handleDemo}
          type="submit"
          value="Demo Login"
        />
      </form>
    </div>
  );
};

export default SessionForm;
