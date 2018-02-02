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
        { pathName === "/signup" ? null : <Link to="/signup">Sign Up</Link>}
        { pathName === "/login" ? null : <Link to="/login">Log In</Link>}
      </div>
    );
  };

  return (
    <header className="nav-bar">
    <Link to="/"><h1 className="logo">Bickr</h1></Link>
      <div>
        {pathName && display()}
      </div>
    </header>
  );
};
