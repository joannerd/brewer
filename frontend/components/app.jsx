import React from 'react';
import { Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionForm from './session/session_form';
import NavBar from './session/navigation_bar';
import Splash from './splash';
import BreweryIndex from './breweries/brewery_index';
import BreweryShow from './breweries/brewery_show';
import CityIndex from './cities/city_index';
import CityShow from './cities/city_show';
import GuideIndex from './guides/guide_index';
import GuideShow from './guides/guide_show';
import GuideForm from './guides/guide_form';
import Forum from './forum/forum';
import PostShow from './forum/post_show';
import Profile from './profile/profile';

const App = () => (
  <div className="app flex-center">
    <header>
      <ProtectedRoute component={NavBar} />
      <div id="cover" />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={SessionForm} />
      <AuthRoute exact path="/signup" component={SessionForm} />
    </Switch>
    <Switch>
      <ProtectedRoute exact path="/guides/new" component={GuideForm} />
      <ProtectedRoute exact path="/guides" component={GuideIndex} />
      <ProtectedRoute exact path="/guides/:guideId" component={GuideShow} />
      <ProtectedRoute exact path="/forum" component={Forum} />
      <ProtectedRoute exact path="/posts/:postId" component={PostShow} />
      <ProtectedRoute exact path="/breweries" component={BreweryIndex} />
      <ProtectedRoute exact path="/breweries/:breweryId" component={BreweryShow} />
      <ProtectedRoute exact path="/cities" component={CityIndex} />
      <ProtectedRoute exact path="/cities/:cityId" component={CityShow} />
      <ProtectedRoute exact path="/users/:userId" component={Profile} />
      <ProtectedRoute exact path="/" component={Splash} />
    </Switch>
  </div>
);

export default App;
