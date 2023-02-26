import * as React from 'react';
import PropTypes from 'prop-types';
import './image.css';
const Image = ({ src }) => {
  return (
      <img className='img' src={src} alt="img" />
  );
};
Image.propTypes = {
  src: PropTypes.string.isRequired
};

export default Image;
