import React from 'react';
import { Link } from 'react-router-dom';
import PhotoFormModal from './photo_form_modal';

//pass props to PhotoFormModal
//PhotoFormModal
//pass props to PhotoForm
  //in the Modal tag, pass in the PhotoForm component

//render PhotoFormModal component in here

//Add a photo button will open the PhotoFormModal when clicked

class PhotoIndex extends React.Component {

  constructor(props) {
    super(props);
  }

    componentDidMount() {
      this.props.fetchPhotos(this.props.albumId);
    }


  render() {
    // <Link to="/photos/new">Create a New Photo</Link>
    // <PhotoFormModal
    //   albumId={this.props.albumId}
    //   createPhoto={this.props.createPhoto}/>
    return (
      <div>
        <h1 className="photo-list-title">My Photos</h1>
        <ul className="photo-list">
          {this.props.photos.map((photo, idx) =>
            <div key={idx}>
              <li className="photo-number">Photo {idx + 1}</li>
              <Link to={`/photos/${photo.id}`}><img src={photo.img_url} /></Link>
              <div className="photo-delete-button">
                <button onClick={() => this.props.deletePhoto(photo.id)}>Delete Photo</button>
              </div>
            </div>)}
        </ul>

        <PhotoFormModal
          albumId={this.props.albumId}
          createPhoto={this.props.createPhoto} />
      </div>
    );
  }

}

export default PhotoIndex;
