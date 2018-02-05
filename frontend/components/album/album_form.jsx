import React from 'react';
import { Link } from 'react-router-dom';

class AlbumForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.album;
  }


  componentDidMount() {
    if (this.props.match.params.albumId) {
      this.props.fetchAlbum(this.props.match.params.albumId);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.album);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  //go to the list of albums page when button is clicked
  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state).then(() => this.props.history.push('/albums'));
  }

  render() {
    const text = this.props.formType === 'new' ? 'Create Album' : 'Update Album';

    return (
      <div>
        <h3>{text}</h3>
        <form onSubmit={this.handleSubmit}>
          <label> Album Name
            <input
              type='text'
              value={this.state.name}
              onChange={this.update('name')}
              />
          </label>

          <input type="submit" value={text} />
          <Link to="/albums">Back to Albums</Link>
        </form>
      </div>
    );

  }

}

export default AlbumForm;
