import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import LogInFormContainer from './session/login_form_container';
import SignUpFormContainer from './session/signup_form_container';
import NavBarContainer from './session/navigation_bar_container';
import SplashContainer from './splash_container';

import BreweryIndex from './breweries/brewery_index';
import BreweryShow from './breweries/brewery_show';
import CityIndex from './cities/city_index';
import CityShow from './cities/city_show';
import GuideIndex from './guides/guide_index';
import GuideShow from './guides/guide_show';
import CreateGuideContainer from './guides/create_guide_container';
import ForumContainer from './forum/forum_container';
import PostContainer from './forum/post_container';
import Profile from './profile/profile';


const App = () => (
  <div className="app flex-center">
    <header>
      <ProtectedRoute component={NavBarContainer} />
      <div id="cover" />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
    <Switch>
      <ProtectedRoute exact path="/guides/new" component={CreateGuideContainer} />
      <ProtectedRoute exact path="/guides" component={GuideIndex} />
      <ProtectedRoute exact path="/guides/:guideId" component={GuideShow} />
      <ProtectedRoute exact path="/forum" component={ForumContainer} />
      <ProtectedRoute exact path="/posts/:postId" component={PostContainer} />
      <ProtectedRoute exact path="/breweries" component={BreweryIndex} />
      <ProtectedRoute exact path="/breweries/:breweryId" component={BreweryShow} />
      <ProtectedRoute exact path="/cities" component={CityIndex} />
      <ProtectedRoute exact path="/cities/:cityId" component={CityShow} />
      <ProtectedRoute exact path="/users/:userId" component={Profile} />
      <ProtectedRoute exact path="/" component={SplashContainer} />
    </Switch>
  </div>
);

export default App;