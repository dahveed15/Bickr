import React from 'react';
import SignUpFormContainer from './session_form/signup_container';
import LoginFormContainer from './session_form/login_container';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import HomePic from './home/home';
import Footer from './footer/footer';
import AlbumIndexContainer from './album/album_index_container';
import AlbumShowContainer from './album/album_show_container';
import AlbumFormContainer from './album/album_form_container';
import PhotoIndexContainer from './photo/photo_index_container';
import PhotoShowContainer from './photo/photo_show_container';
import PhotoForm from './photo/photo_form';

//route allows us to add custom routes to send our components to
//I want Bickr to be rendered on every web page, so I won't route it
//However, I only want the sign up info to be on the sign up page
  //Route path="/signup"

//Other components that I will need
//Nav Bar Home page
//Greeting buttons (Sign In/Sign Up)
// <Route exact path='/' component Home />



const App = () => {
  return (
    <div id="container">
      <Route path='/' component={NavBarContainer} />
      <div className="fix-footer">
        <ProtectedRoute exact path="/albums/:albumId" component={AlbumShowContainer} />
        <Switch>
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
          <AuthRoute exact path="/login" component={LoginFormContainer} />
          <AuthRoute exact path="/" component={HomePic} />
          <ProtectedRoute exact path="/albums" component={AlbumIndexContainer} />
          <ProtectedRoute exact path="/albums/new" component={AlbumFormContainer} />
          <ProtectedRoute exact path="/albums/:albumId" component={PhotoIndexContainer} />
          <ProtectedRoute exact path="/albums/:albumId/edit" component={AlbumFormContainer} />
          <ProtectedRoute exact path="/photos/:photoId" component={PhotoShowContainer} />
          <Redirect to='/' />
        </Switch>
      </div>
      <Route path='/' component={Footer} />
    </div>
  );
};

export default App;
