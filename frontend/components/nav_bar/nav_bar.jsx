import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser, logout, pathName }) => {



  const display = (
    <div>
      <Link to="/login">Log In</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <h1 className="logo">Bickr</h1>
      <div>
        {pathName && display}
      </div>
    </header>
  );
};
