import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser, logout, pathName }) => {

    if (currentUser) {
      return (
        <header className="login-nav-bar">
          <div className="login-nav-bar-left">
            <Link to="/profile" className="logo">bickr</Link>
            <Link to="/profile" className="you">You</Link>
            <Link to="/explore" className="explore">Explore</Link>
            <Link to="/albums/new" className="create">Create</Link>
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
