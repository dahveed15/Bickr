import React from 'react';

export default () => {

  const images = [
    'https://www.talkingmats.com/wp-content/uploads/2013/09/talking-mats-who-we-are.jpg',
    'http://clipartstation.com/wp-content/uploads/2017/11/children-talking-clipart-9.jpg',
    'https://computing.ece.vt.edu/~santol/projects/zsl_via_visual_abstraction/interact/interact_stand-alone_dataset/imgs/20YSVQ8H88MQHFYB76MCO1R2GRY7QY_11.jpg',
    'https://image.flaticon.com/icons/svg/141/141918.svg',
    'https://sacredembrace.files.wordpress.com/2013/11/couple-talking.gif',
    'https://www.normalbreathing.com/images/talking-women2.jpg',
    'https://u3asites.org.uk/files/w/wendover/discussion-one.jpg',
    'http://moziru.com/images/panels-clipart-group-discussion-4.jpg'
  ];

  return (
    <div>
      <p className="explore-title">Explore</p>
      <ul className="explore-photos-list">
        {images.map((el, idx) =>
          <img key={idx} src={el} />
        )}
      </ul>
    </div>
  );

};
