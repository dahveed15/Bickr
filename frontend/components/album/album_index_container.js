import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { fetchAlbums, deleteAlbum } from '../../actions/album_actions';

const mapStateToProps = (state) => {
  //give me an array of the current user's albums
  return {
    albums: Object.values(state.albums)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAlbums: () => dispatch(fetchAlbums()),
    deleteAlbum: (id) => dispatch(deleteAlbum(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);
