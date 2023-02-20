import PropTypes from 'prop-types';
import * as React from 'react';

export default function Description ({ date, time, title, description }) {
  return (
    <div className='container-data'>
      <div className='container-feat'>
        <p>{date}</p>
        <p>{time}</p>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <hr />
    </div>
  );
}

// write prop validation for date, time, title, description
Description.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};
