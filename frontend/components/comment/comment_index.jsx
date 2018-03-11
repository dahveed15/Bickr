import React from 'react';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.photoId);
  }

  render() {
    return (
      <div>
        <h1>Comments</h1>
        <ul>
          {
            this.props.comments.map((comment, idx) =>
            <div key={idx}>
              <h2>{comment.comment_user}</h2>
              <p>{comment.body}</p>
            </div>
          )}
        </ul>
      </div>
    );
  }
}

export default CommentIndex;
