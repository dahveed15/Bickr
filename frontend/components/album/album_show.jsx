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
        <div className="album-show-title">
          <p>{album.name}</p>
        </div>
        <div className="album-show-links">
          <Link to={`/albums/${album.id}/edit`}>Update Album</Link>
          <Link to="/albums">Back to Albums</Link>
        </div>
      </div>
    );
  }

}

export default AlbumShow;
