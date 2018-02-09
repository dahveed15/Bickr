# Bickr

[Bickr live](https://bickr-aa.herokuapp.com/#/)

Bickr is a full-stack web application inspired by Flickr. Bickr is made using Ruby on Rails Backend, PostGresQL database, HTML, CSS, and React.js/Redux frontend.

## Features
* Secure frontend/backend user authentication using BCrypt
* Users can upload images directly to a Cloudinary server that hosts the images
* Users can create albums to hold images
* Users can upload photos through a modal (drag and drop feature is supported)
* Modal automatically closes after the upload action is successful


### Creating Albums

![](https://i.imgur.com/U1NwSAg.png)
![](https://i.imgur.com/AJPLYjA.jpg)

Users have the ability to create an album and add photos to that album. This is accomplished by passing in an album id, using a create photo action that takes in the albumId and photo data, iterating over every photo belonging to that album, and matching the created photos' route with the albumId's route.

```js
export const createPhoto = (albumId, imgUrl) => {
  return $.ajax({
    method: 'POST',
    url: `api/albums/${albumId}/photos`,
    data: {photo: {img_url: imgUrl} }
  });
};
```

```js
{this.props.photos.map((photo, idx) =>
            <div key={idx}>
              <Link to={`/photos/${photo.id}`}>
                <img src={photo.img_url} />
              </Link>
            </div>)
}
```

```js
const App = () => {
  return (
        <ProtectedRoute exact path="/albums/:albumId" component={AlbumShowContainer} />
        <Switch>
          <ProtectedRoute exact path="/albums/:albumId" component={PhotoIndexContainer} />
          <ProtectedRoute exact path="/albums/:albumId/edit" component={AlbumFormContainer} />
          <Redirect to='/profile' />
        </Switch>
  );
};
```

### Uploading a Photo

![](https://i.imgur.com/GqK8Qsb.png)
![](https://i.imgur.com/DslpicH.png)
![](https://i.imgur.com/c1d3gp6.png)
![](https://i.imgur.com/9OxYHtL.png)

In addition to viewing a list of photos in an album, users have the ability to add as many photos as they desire to any album that they desire. This is accomplised by passing the albumId and createPhoto prop through my modal component to the upload code. The createdPhoto action will dispatch once the photo uploads, and the photo will be added to the list of photos.

```js
{this.props.photos.map((photo, idx) =>
            <div key={idx}>
              <Link to={`/photos/${photo.id}`}>
                <img src={photo.img_url} />
              </Link>
            </div>)
}

<PhotoFormModal
          albumId={this.props.albumId}
          createPhoto={this.props.createPhoto}
          useOwnProps={this.props.useOwnProps} />
```

```js
       <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Photo Upload Modal"
        >
          <PhotoForm
            albumId={this.props.albumId}
            createPhoto={this.props.createPhoto}
            useOwnProps={this.props.useOwnProps} />
        </Modal>
```

```js
  if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
        this.props.createPhoto(this.props.albumId, this.state.uploadedFileCloudinaryUrl)
     }
```

The ability to drag and drop photos is accomplished through React Dropzone:

```js
   <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
   </Dropzone>
```

### Future Improvements

* Search photo functionality
* Allow users to view albums/photos of other users
* Allow Users to comment on photos and add tags
* Allow Users to write descriptions for each photo and album
