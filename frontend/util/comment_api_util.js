export const createComment = (photoId, body, commentUser) => {
  return $.ajax({
    method: 'POST',
    url: `api/photos/${photoId}/comments`,
    data: {comment: {body: body, comment_user: commentUser}}
  });
};

export const updateComment = (comment) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/comments/${comment.id}`,
    data: {comment}
  });
};

export const deleteComment = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`
  });
};
