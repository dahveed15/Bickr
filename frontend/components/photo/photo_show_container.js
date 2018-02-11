import { connect } from 'react-redux';
import PhotoShow from './photo_show';
import { fetchPhoto, deletePhoto } from '../../actions/photo_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    photo: state.photos[ownProps.match.params.photoId],
    currentUser: state.session.currentUser.username
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhoto: id => dispatch(fetchPhoto(id)),
    deletePhoto: (id) => dispatch(deletePhoto(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
