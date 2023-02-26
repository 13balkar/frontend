export const BACKEND_URL = 'http://localhost:8080';

export const GET_RECORDS = {
  method: 'get',
  url: '/api/records'
};

export const GET_LIKES_BY_ID = (id) => ({
  method: 'get',
  url: `/api/records/${id}/likes`
});

export const POST_LIKE_BY_ID = (id) => ({
  method: 'patch',
  url: `/api/records/${id}/likes`
});
