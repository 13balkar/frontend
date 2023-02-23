import propTypes from 'prop-types';
import React, { createContext } from 'react';

export const BlogPostContext = createContext({});
export const ReactionContext = createContext({});

export const BlogPostProvider = ({ children }) => {
  const [blogs, setBlogs] = React.useState();
  const [error, setError] = React.useState();
  return (
    <BlogPostContext.Provider value={{ blogs, setBlogs, error, setError }}>
      {children}
    </BlogPostContext.Provider>
  );
};

export const ReactionProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);
  const [like, setLike] = React.useState();
  return (
    <ReactionContext.Provider value={{ count, setCount, like, setLike }}>
      {children}
    </ReactionContext.Provider>
  );
};

BlogPostProvider.propTypes = {
  children: propTypes.node.isRequired
};

ReactionProvider.propTypes = {
  children: propTypes.node.isRequired
};
