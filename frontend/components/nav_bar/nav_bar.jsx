import React from 'react';
import { Link } from 'react-router-dom';

//change explore link to a page when you make the explore page

export default ({currentUser, logout, pathName }) => {

    if (currentUser) {
      return (
        <header className="login-nav-bar">
          <div className="login-nav-bar-left">
            <Link to="/profile" className="logo">bickr</Link>
            <Link to="/profile">You</Link>
            <Link to="/profile">Explore</Link>
            <Link to="/albums/new">Create</Link>
          </div>
          <div className="login-nav-bar-right">
            <Link to="/albums">Albums</Link>
            <button onClick={logout}>Log Out</button>
          </div>
        </header>
      );
    }

    return (
      <header className="nav-bar">
        <Link to="/" className="logo">bickr</Link>
        <div className="register-user">
          { pathName === "/login" ? null : <Link to="/login" className="login-link">Log In</Link>}
          { pathName === "/signup" ? null : <Link to="/signup" className="signup-link">Sign Up</Link>}
        </div>
      </header>

    );

};
