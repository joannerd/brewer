import React from 'react';
import { Switch } from 'react-router-dom';
import LogInFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import NavBarContainer from './session/navigation_bar_container';
import BreweryIndexContainer from './breweries/brewery_index_container';
import CityIndexContainer from './cities/city_index_container';
import Splash from './splash';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="app flex-center">
    <ProtectedRoute component={NavBarContainer} />
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
    <ProtectedRoute exact path="/" component={Splash} />
    <ProtectedRoute exact path="/breweries" component={BreweryIndexContainer} />
    <ProtectedRoute exact path="/cities" component={CityIndexContainer} />


    {/* <ProtectedRoute component={FooterContainer} /> */}
  </div>
);

export default App;