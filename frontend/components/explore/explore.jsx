import React from 'react';
import { Link } from 'react-router-dom';

class ExplorePhotoIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.explorePhotos();
  }

  render() {
    if (this.props.explorePhotoState.length === 0) {
      console.log('anything');
      return (
        <div>Loading...</div>
      );
    }
    console.log(this.props.explorePhotoState);
    return (
      <div>
        {this.props.explorePhotoState.map((photo, idx) =>
          <div key={idx}>
            <Link to={`/photos/${photo.id}`}><img src={photo.img_url} /></Link>
          </div>)}
      </div>
    );
  }

}

export default ExplorePhotoIndex;
