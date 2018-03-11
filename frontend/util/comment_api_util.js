export const createComment = (photoId, body, commentUser) => {
  return $.ajax({
    method: 'POST',
    url: `api/photos/${photoId}/comments`,
    data: {comment: {body: body, comment_user: commentUser}}
  });
};
