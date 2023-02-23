import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { GET_BLOG_POSTS } from '../../constants/apiEndPoints';
import { makeRequest } from '../../utils';
import Card from './card';
const Cards = () => {
  const { blogs, setBlogs } = React.useState();
  const [error, setError] = React.useState();
  const navigate = useNavigate();
  React.useEffect(() => {
    makeRequest(GET_BLOG_POSTS, {}, navigate)
      .then(response => {
        response.sort((a, b) => a.claps < b.claps ? 1 : -1);
        setBlogs(response);
      })
      .catch(err => {
        setError(err);
      });
  }, []);
  if (error) { return <h1>Error</h1>; }
  return blogs
    ? (
    <main className='outerPadding' data-testid='blog' >
      {blogs.map((blog) => (
        <Card key={Math.random()} post={blog} />
      ))}
    </main>
      )
    : <h1>Loading</h1>;
};

export default Cards;
