import React from 'react';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }


  render() {
    const album = this.props.album;
    //the case if previous state is undefined
    if (!album) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <p>{album.name}</p>
        <Link to="/albums">Back to Albums</Link>
      </div>
    );
  }

}

export default AlbumShow;
