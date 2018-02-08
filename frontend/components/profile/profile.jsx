import React from 'react';

export default ({currentUser}) => {
  return (
    <div>
      <p>Hello, {currentUser.username}! Welcome to Bickr!</p>
    </div>
  );
};
