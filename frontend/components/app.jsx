import React from 'react';
import SignUpFormContainer from './session_form/signup_container';
import LoginFormContainer from './session_form/login_container';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute } from '../util/route_utils';

//route allows us to add custom routes to send our components to
//I want Bickr to be rendered on every web page, so I won't route it
//However, I only want the sign up info to be on the sign up page
  //Route path="/signup"

//Other components that I will need
//Nav Bar Home page
//Greeting buttons (Sign In/Sign Up)
// <Route exact path='/' component Home />

const App = () => (
  <div>
      <Route path='/' component={NavBarContainer} />
      <AuthRoute path="/signup" component={SignUpFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
  </div>
);

export default App;
