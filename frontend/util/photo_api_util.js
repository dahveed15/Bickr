export const fetchPhotos = (albumId) => {
  return $.ajax({
    method: 'GET',
    url: `api/albums/${albumId}/photos`
  });
};

export const fetchPhoto = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/photos/${id}`
  });
};

export const createPhoto = (albumId, photo) => {
  return $.ajax({
    method: 'POST',
    url: `api/albums/${albumId}/photos`,
    data: {photo}
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
