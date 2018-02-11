import { connect } from 'react-redux';
import ExplorePhotoIndex from './explore';
import { explorePhotos } from '../../actions/photo_actions';

const mapStateToProps = (state) => {
  return {
    explorePhotoState: Object.values(state.explorePhotos)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    explorePhotos: () => dispatch(explorePhotos())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExplorePhotoIndex);
