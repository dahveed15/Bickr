import { connect } from 'react-redux';
import CommentIndex from 'comment_index';
import { fetchComments, createComment, updateComment, deleteComment } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    comments: Object.values(state.comments),
    currentUser: state.session.currentUser.username,
    photoId: ownProps.match.params.photoId ? ownProps.match.params.photoId : null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: (photoId) => dispatch(fetchComments(photoId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
