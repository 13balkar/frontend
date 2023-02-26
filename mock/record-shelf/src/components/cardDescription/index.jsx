import * as React from 'react';
import PropTypes from 'prop-types';
import './desc.css';
const CardDescription = ({ name, singer }) => {
  return (
        <div className="card-desc">
            <p className='song'>{name}</p>
            <p className='singer'>{singer}</p>
        </div>
  );
};

CardDescription.propTypes = {
  name: PropTypes.string.isRequired,
  singer: PropTypes.string.isRequired
};

export default CardDescription;
