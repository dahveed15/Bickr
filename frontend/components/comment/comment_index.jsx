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

  // componentWillReceiveProps(newProps) {
  //
  // }

  //let the state of what I type in the comment field continually update
  handleCommentInput() {
    return(e) => {
      this.setState({body: e.target.value});
    };
  }

  addComment(e) {

    e.preventDefault();
    this.props.createComment(this.props.photoId, this.state.body, this.props.currentUser)
    .then(body => { 
      this.setState({body: body});
    });
    // .then(this.props.history.push(`/explore`))
    // .then;
  }

  render() {
    return (
      <div>
        <h1>Comments</h1>
        <form onSubmit={this.addComment}>
          <textarea
            placeholder="Start typing..."
            autoFocus
            value={this.state.body}
            onChange={this.handleCommentInput()}
            ></textarea>
          <input type="submit" value="Add Comment"/>
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
