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
    const text = this.props.formType === 'new' ? 'Create Album!' : 'Update Album!';

    return (
      <div className='outer-album-form-div'>
        <div className="inner-album-form-div">
          <div className="album-form-title">
            <h3>{text}</h3>
          </div>
          <form className="album-form" onSubmit={this.handleSubmit}>
            <label> Album Name:
              <input
                type='text'
                value={this.state.name}
                onChange={this.update('name')}
                />
            </label>

            <div className="album-buttons">
              <input type="submit" value={text} />
              <Link to="/albums">Back to Albums</Link>
            </div>
          </form>
        </div>
      </div>
    );

  }

}

export default AlbumForm;
