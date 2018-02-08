import { connect } from 'react-redux';
import PhotoIndex from './photo_index';
import { fetchPhotos, deletePhoto, createPhoto } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  //give me an array of the current user's photos

  return {
    photos: Object.values(state.photos),
    albumId: ownProps.match.params.albumId ? ownProps.match.params.albumId : null
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhotos: (albumId) => dispatch(fetchPhotos(albumId)),
    deletePhoto: (id) => dispatch(deletePhoto(id)),
    createPhoto: (albumId, photo) => dispatch(createPhoto(albumId, photo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);
