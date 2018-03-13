import React from 'react';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.photoId);
  }

  //let the state of what I type in the comment field continually update
  handleCommentInput() {
    return(e) => {
      this.setState({body: e.target.value});
    };
  }

  addComment(e) {
    e.preventDefault();
    this.props.createComment(this.props.photoId, this.state.body, this.props.currentUser)
    .then(() => {
      this.setState({body: ''});
    });
  }

  deleteButton(comment) {
    return (
      <div>
        <button className="delete-comment-button" onClick={() => this.props.deleteComment(comment.id)}>Delete</button>
      </div>
    );
  }
  deleteMethod(comment){
    if (this.props.currentUser === comment.comment_user) {
      return this.deleteButton(comment);
    }
  }

  render() {
    return (
      <div>
        <h1 className="comment-title">Comments</h1>
        <div className="comment-items">
          {
            this.props.comments.map((comment, idx) =>
            <div className="comment-info" key={idx}>
              <div className="comment-user">
                <h2>{comment.comment_user}</h2>
              </div>
              <div className="comment-text">
                <p>{comment.body}</p>
              </div>
              {this.deleteMethod(comment)}
            </div>
          ).reverse()}
        </div>
        <form className="add-comment-form" onSubmit={this.addComment}>
          <textarea
            rows="10"
            cols="80"
            placeholder="Start typing..."
            autoFocus
            value={this.state.body}
            onChange={this.handleCommentInput()}
            ></textarea>
          <div className="add-comment-button">
            <input type="submit" value="Add Comment"/>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentIndex;
