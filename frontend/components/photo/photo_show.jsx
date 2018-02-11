import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }


  deleteButton() {
    return (
      <div className="photo-delete-button">
        <button onClick={() => this.props.deletePhoto(this.props.photo.id).then(() => this.props.history.push('/albums'))}>Delete Photo</button>
      </div>
    );
  }

  backTo() {
    return (
      <div className="photo-delete-button">
        <Link to="/explore">Back to Explore</Link>
        <Link to="/albums">Back to Albums</Link>
      </div>
    );
  }

  render() {
    const photo = this.props.photo;
    //the case if previous state is undefined
    if (!photo) {
      return (
        <div>Loading...</div>
      );
    }

    let deleteButton;

    if (this.props.currentUser === this.props.photo.username) {
        deleteButton = this.deleteButton();
    } else {
      deleteButton = '';
    }

    return (
      <div>
        <p>Uploaded By: {this.props.photo.username}</p>
        <div className="photo-show-pic">
          <img src={this.props.photo.img_url} />
        </div>
        {deleteButton}
        {this.backTo()}
      </div>
    );
  }

}

export default PhotoShow;
