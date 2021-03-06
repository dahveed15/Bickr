import React from 'react';
import { Link } from 'react-router-dom';
import PhotoFormModal from './photo_form_modal';
import Masonry from 'react-masonry-component';

//pass props to PhotoFormModal
//PhotoFormModal
//pass props to PhotoForm
  //in the Modal tag, pass in the PhotoForm component

//render PhotoFormModal component in here

//Add a photo button will open the PhotoFormModal when clicked

// const masonryOptions = {
//     transitionDuration: 0,
//     fitWidth: true
// };

class PhotoIndex extends React.Component {

  constructor(props) {
    super(props);
  }

    componentDidMount() {
      this.props.fetchPhotos(this.props.albumId);
    }


  render() {
    // <li className="photo-number">Photo {idx + 1}</li>
    // <Masonry
    //   className={'photo-list'}
    //   options={masonryOptions}
    //   >
    // {
    //   this.props.photos.map((photo, idx) =>
    //   <div key={idx}>
    //     <Link to={`/photos/${photo.id}`}><img src={photo.img_url} /></Link>
    //   </div>
    // )}
    // </Masonry>
    return (
      <div>
        <h1 className="photo-list-title">My Photos</h1>
        <ul className="photo-list">
          {this.props.photos.map((photo, idx) =>
            <div key={idx}>
              <Link to={`/photos/${photo.id}`}><img src={photo.img_url} /></Link>
            </div>)}
        </ul>
        <PhotoFormModal
          albumId={this.props.albumId}
          createPhoto={this.props.createPhoto}
          useOwnProps={this.props.useOwnProps} />
      </div>
    );
  }

}

export default PhotoIndex;
