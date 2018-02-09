import React from 'react';

export default ({currentUser}) => {

  const images = ['http://www.bluebirdcare.co.uk/Exeter/images-(1)/talking?width=550&height=259',
                  'http://clipartstation.com/wp-content/uploads/2017/11/people-talking-clipart.jpg',
                  'https://image.freepik.com/free-icon/bald-professors-talking_318-58936.jpg',
                  'https://www.talkingmats.com/wp-content/uploads/2015/01/talking_about_myself.gif',
                  'https://image.flaticon.com/icons/png/512/11/11034.png',
                  'https://i.pinimg.com/originals/34/fb/60/34fb605dedec73ed93d8244c8531a989.jpg',
                  'http://worldartsme.com/images/talking-at-work-clipart-1.jpg',
                  'https://statepointmedia.com/wp-content/uploads/2017/05/People-Talking.jpg'];

  return (
    <div>
      <p className="welcome">Hello, {currentUser.username}! Welcome to Bickr!</p>
      <ul className="align-home-page-images">
        <div className="outer-home-page-div">
          {images.map((el, idx) =>
            <div className="card" key={idx}>
              <div className="card-title">
                <p>Bickr Editorial <span>Official</span></p>
              </div>
              <img src={el} />
            </div>
          )}
        </div>
      </ul>
    </div>
  );
};
