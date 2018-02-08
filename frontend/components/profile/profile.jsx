import React from 'react';

export default ({currentUser}) => {
  return (
    <div>
      <p className="welcome">Hello, {currentUser.username}! Welcome to Bickr!</p>
    </div>
  );
};
