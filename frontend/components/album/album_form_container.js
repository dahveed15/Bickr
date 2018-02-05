import { connect } from 'react-redux';
import AlbumForm from './album_form';
import { fetchAlbum, createAlbum, updateAlbum } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  let album = { name: ''};
  let formType = "new";
  if (ownProps.match.path === "/albums/:albumId/edit") {
    album = state.albums[ownProps.match.params.albumId];
    formType = 'edit';
  }

  return {
    album,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  let action;
  if (ownProps.match.path === "/albums/:albumId/edit") {
    action = updateAlbum;
  } else {
    action = createAlbum;
  }

  return {
    fetchAlbum: id => dispatch(fetchAlbum(id)),
    action: album => dispatch(action(album))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumForm);
