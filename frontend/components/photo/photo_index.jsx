import React from 'react';
import { Link } from 'react-router-dom';

class PhotoIndex extends React.Component {

  constructor(props) {
    super(props);
  }

    componentDidMount() {
      console.log(this.props.albumId);
      this.props.fetchPhotos(this.props.albumId);
    }


  render() {
    // <Link to="/photos/new">Create a New Photo</Link>
    return (
      <div>
        <h1 className="photo-list-title">My Photos</h1>
        <ul className="photo-list">
          {this.props.photos.map((photo, idx) =>
            <div key={idx}>
              <li className="photo-number">Photo {idx + 1}</li>
              <Link to={`photos/${photo.id}`}><img src={photo.img_url} /></Link>
              <div className="photo-delete-button">
                <button onClick={() => this.props.deletePhoto(photo.id)}>Delete Photo</button>
              </div>
            </div>)}
        </ul>
      </div>
    );
  }

}

export default PhotoIndex;
