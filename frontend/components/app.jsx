import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import LogInFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import SplashContainer from './session/splash_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
        {/* <h1>Brewer</h1> */}
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;