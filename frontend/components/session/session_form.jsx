import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { login, signup, clearErrors } from '../../actions/session_actions';

const SessionForm = () => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const history = useHistory();
  const errors = useSelector(state => state.errors.session);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const isLogin = match.path === '/login';
  const isSignup = !isLogin;

  useEffect(() => {
    if (errors.length) dispatch(clearErrors());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
      email,
    };
    if (isLogin) {
      await dispatch(login(user));
    } else {
      await dispatch(signup(user));
    }
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

    if (isLogin) {
      typeUser();
      window.setTimeout(() => typePw(), 1000);
      window.setTimeout(() => {
        const demoUser = {
          username: 'DemoUser',
          password: '123456',
        };
        dispatch(login((demoUser)))
          .then(() => history.push('/'));
      }, 1600);
    }
  };

  const updateUsername = e => setUsername(e.target.value);
  const updatePassword = e => setPassword(e.target.value);
  const updateEmail = e => setEmail(e.target.value);

  return (
    <div className="form-container flex-center">
      <span className="logo">BREWER</span>

      <div className="links">
        <Link to="/login" className="session-link">
          <span className={isLogin ? 'active' : 'inactive'}>LOG IN</span>
        </Link>

        <Link to="/signup" className="session-link">
          <span className={isSignup ? 'active' : 'inactive'}>SIGN UP</span>
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
          onChange={updateUsername}
          placeholder="Username"
          type="text"
          name="username"
          value={username}
        />

        <input
          id="password"
          className="input"
          onChange={updatePassword}
          placeholder="Password"
          type="password"
          name="password"
          value={password}
        />

        <input
          className={isSignup ? 'input email' : 'hidden'}
          onChange={updateEmail}
          placeholder="Email"
          type="text"
          name="email"
          value={email}
        />

        <input
          className="input submit"
          onClick={handleSubmit}
          type="submit"
          value={isLogin ? 'Log In' : 'Sign Up'}
        />

        <input
          className={isLogin ? 'input submit' : 'hidden'}
          onClick={handleDemo}
          type="submit"
          value="Demo Login"
        />
      </form>
    </div>
  );
};

export default SessionForm;
