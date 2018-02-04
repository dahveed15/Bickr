import React from 'react';

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


  render() {
    console.log(this.props.albums);
    return (
      <div>
        I AM THE ALBUM INDEX PAGE
        <ul className="album-list">
          {this.props.albums.map((album) =>
            <li key={album.id}>{album.name}</li> )}
        </ul>
      </div>
    );
  }

}

export default AlbumIndex;
