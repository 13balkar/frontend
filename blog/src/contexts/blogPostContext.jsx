import propTypes from 'prop-types';
import React, { createContext } from 'react';

export const BlogPostContext = createContext({});

export const BlogPostProvider = ({ children }) => {
  const [blogs, setBlogs] = React.useState();
  // const [error, setError] = React.useState();
  return (
    <BlogPostContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogPostContext.Provider>
  );
};

BlogPostProvider.propTypes = {
  children: propTypes.node.isRequired
};
