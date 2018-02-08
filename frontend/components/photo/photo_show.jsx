import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }


  render() {
    const photo = this.props.photo;
    //the case if previous state is undefined
    if (!photo) {
      return (
        <div>Loading...</div>
      );
    }

    // <div className="photo-show-links">
    //   <Link to={`/photos/${photo.id}/edit`}>Update Photo</Link>
    //   <Link to="/photos">Back to Photos</Link>
    // </div>

    return (
      <div>
        <div className="photo-show-pic">
          <img src={this.props.photo.img_url} />
        </div>
        <div className="photo-delete-button">
          <button onClick={() => this.props.deletePhoto(photo.id)}>Delete Photo</button>
        </div>
      </div>
    );
  }

}

export default PhotoShow;
