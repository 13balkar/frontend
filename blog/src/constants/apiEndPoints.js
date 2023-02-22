export const BACKEND_URL = 'http://localhost:8080';

export const GET_BLOG_POSTS = {
  url: '/blog-posts',
  method: 'get'
};

export const UPDATE_BLOG_POST = (id) => ({
  url: `/blog-posts/${id}`,
  method: 'put'
});
