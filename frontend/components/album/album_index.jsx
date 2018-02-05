import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndex extends React.Component {

  constructor(props) {
    super(props);
  }

    componentDidMount() {
      this.props.fetchAlbums();
    }


  render() {
    return (
      <div>
        <h1 className="album-list-title">My Albums</h1>
        <ul className="album-list">
          {this.props.albums.map((album, idx) =>
            <div key={idx}>
              <li className="album-number">Album {idx + 1}</li>
              <Link to={`albums/${album.id}`}>{album.name}</Link>
              <div className="album-delete-button">
                <button onClick={() => this.props.deleteAlbum(album.id)}>Delete Album</button>
              </div>
            </div>)}
        </ul>
        <div className="create-new-album-link">
          <Link to="/albums/new">Create a New Album</Link>
        </div>
      </div>
    );
  }

}

export default AlbumIndex;
