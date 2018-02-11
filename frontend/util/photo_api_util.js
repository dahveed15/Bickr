export const fetchPhotos = (albumId) => {
  return $.ajax({
    method: 'GET',
    url: `api/albums/${albumId}/photos`,
    data: {id: albumId}
  });
};

export const fetchPhoto = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  });
};

export const createPhoto = (albumId, imgUrl) => {
  return $.ajax({
    method: 'POST',
    url: `api/albums/${albumId}/photos`,
    data: {photo: {img_url: imgUrl} }
  });
};

export const updatePhoto = (photo) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/photos/${photo.id}`,
    data: {photo}
  });
};

export const deletePhoto = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/photos/${id}`
  });
};

export const explorePhotos = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/explores'
  });
};
