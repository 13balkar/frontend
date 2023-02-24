export const BACKEND_URL = 'http://localhost:8080';

export const GET_TASKS = {
  url: '/tasks',
  method: 'get'
};
export const CREATE_TASK = {
  url: '/tasks',
  method: 'post'
};
export const DELETE_TASK = (id) => ({
  url: `/tasks/${id}`,
  method: 'delete'
});

export const UPDATE_TASK = (id) => ({
  url: `/tasks/${id}`,
  method: 'patch'
});
