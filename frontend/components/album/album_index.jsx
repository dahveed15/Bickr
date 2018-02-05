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
    //I currently have that annoying key warning
    //ask TA how to fix with two things
    //I want the album number and the title
    return (
      <div>
        <ul className="album-list">
          {this.props.albums.map((album, idx) =>
            <div>
              <li>Album {idx + 1}</li>
              <li>{album.name}</li>
            </div>)}
        </ul>
      </div>
    );
  }

}

export default AlbumIndex;
