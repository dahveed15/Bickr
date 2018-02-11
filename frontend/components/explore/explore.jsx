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
      return (
        <div>Loading...</div>
      );
    }
    return (
      <div>
        <p className="explore-title">Explore</p>
        <ul className="photo-list">
          {this.props.explorePhotoState.map((photo, idx) =>
            <div key={idx}>
              <Link to={`/photos/${photo.id}`}><img src={photo.img_url} /></Link>
            </div>)}
        </ul>
      </div>
    );
  }

}

export default ExplorePhotoIndex;
