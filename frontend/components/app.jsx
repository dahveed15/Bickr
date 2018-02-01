import React from 'react';
import SignUpFormContainer from './session_form/signup_container';
import { Route } from 'react-router-dom';
//route allows us to add custom routes to send our components to
//I want Bickr to be rendered on every web page, so I won't route it
//However, I only want the sign up info to be on the sign up page
  //Route path="/signup"
const App = () => (
  <div>
    <h1>Bickr</h1>
    <Route path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;
