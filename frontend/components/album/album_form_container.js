import { connect } from 'react-redux';
import AlbumForm from './album_form';
import { fetchAlbum, createAlbum, updateAlbum } from '../../actions/album_actions';

const mapStateToProps = (state, ownProps) => {
  // let album = { name: ''};
  // let formType = "new";
  // if (ownProps.match.path === "/albums/:albumId/edit") {
  //   album = state.albu
  // }
};

const mapDispatchToProps = (dispatch, ownProps) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumForm);
