import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser, logout, pathName }) => {



  const display = () => {

    if (currentUser) {
      return (
        <div>
          <p>Hello, {currentUser.username}</p>
          <button onClick={logout}>Log Out</button>
        </div>
      );
    }
    return (
      <div className="register-user">
        { pathName === "/login" ? null : <Link to="/login" className="login-link">Log In</Link>}
        { pathName === "/signup" ? null : <Link to="/signup" className="signup-link">Sign Up</Link>}
      </div>
    );
  };

  return (
    <header className="nav-bar">
    <Link to="/" className="logo">bickr</Link>
      <div>
        {pathName && display()}
      </div>
    </header>
  );
};
