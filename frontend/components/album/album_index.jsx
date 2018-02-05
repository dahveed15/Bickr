import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndex extends React.Component {

  constructor(props) {
    super(props);
    // this.state = this.props.albums;
  }

  //create album
    //saves the album name, stores the info in the database,
    //and links them to the show page with that album name

  //show all albums
    //
    componentDidMount() {
      this.props.fetchAlbums();
    }

    // <li>{album.name}</li>

  render() {
    //I currently have that annoying key warning
    //ask TA how to fix with two things
    //I want the album number and the title
    //show, index, and delete functionality complete
    return (
      <div>
        <ul className="album-list">
          {this.props.albums.map((album, idx) =>
            <div>
              <li>Album {idx + 1}</li>
              <Link to={`albums/${album.id}`}>{album.name}</Link>
              <button onClick={() => this.props.deleteAlbum(album.id)}>Delete Album</button>
            </div>)}
        </ul>
      </div>
    );
  }

}

export default AlbumIndex;
