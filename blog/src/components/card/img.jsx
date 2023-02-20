import PropTypes from 'prop-types';
import * as React from 'react';

export default function Image ({ src, alt }) {
  return (
    <img
      className="container-img"
      src={src}
      alt={alt}
    />
  );
}

// write prop validation for src
Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
