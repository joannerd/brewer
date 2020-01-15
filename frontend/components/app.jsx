import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LogInFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import NavBarContainer from './session/navigation_bar_container';
import SplashContainer from './splash_container';

import BreweryIndexContainer from './breweries/brewery_index_container';
import CityIndexContainer from './cities/city_index_container';
import CityShowContainer from './cities/city_show_container';
import GuideIndexContainer from './guides/guide_index_container';
import GuideShowContainer from './guides/guide_show_container';
import CreateGuideContainer from './guides/create_guide_container';
import ForumContainer from './forum/forum_container';
import ProfileContainer from './profile/profile_container';


const App = () => (
  <div className="app flex-center">
    <header>
      <ProtectedRoute component={NavBarContainer} />
      <div id="cover"></div>
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
    <Switch>
      <ProtectedRoute exact path="/guides/new" component={CreateGuideContainer} />
      <ProtectedRoute exact path="/guides" component={GuideIndexContainer} />
      <ProtectedRoute exact path="/guides/:guideId" component={GuideShowContainer} />
      <ProtectedRoute exact path="/forum" component={ForumContainer} />
      <ProtectedRoute exact path="/breweries" component={BreweryIndexContainer} />
      <ProtectedRoute exact path="/cities" component={CityIndexContainer} />
      <ProtectedRoute exact path="/cities/:cityId" component={CityShowContainer} />
      <ProtectedRoute exact path="/users/:userId" component={ProfileContainer} />
      <ProtectedRoute exact path="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;