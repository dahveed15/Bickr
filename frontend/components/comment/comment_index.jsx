import React from 'react';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
  }

  componentDidMount() {
    this.props.fetchComments(this.props.photoId);
  }

  handleCommentInput() {
    return(e) => {
      this.setState({body: e.target.value});
    };
  }

  render() {
    return (
      <div>
        <h1>Comments</h1>
        <form>
          <textarea
            placeholder="Start typing..."
            autoFocus
            value={this.state.body}
            onChange={this.handleCommentInput()}
            ></textarea>
        </form>
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
