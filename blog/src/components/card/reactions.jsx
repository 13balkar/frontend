import PropTypes from 'prop-types';
import * as React from 'react';
export default function Reaction ({
  count, clapping, liker, liked
}) {
  const heartRed = 'heart-red.svg'; const heartBlack = 'heart-black.svg';
  const src = liked ? heartRed : heartBlack;
  return (
    <div className="container-data">
      <div className="container-feat">
        <div className="reactions">
          <img onClick={clapping} src="/assets/Icons/clapping.svg" alt="" />
          <p>{count}</p>
        </div>
        <img onClick={liker} src={`/assets/Icons/${src}`} alt="like" />
      </div>
    </div>
  );
}

Reaction.propTypes = {
  count: PropTypes.number.isRequired,
  clapping: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired,
  liker: PropTypes.func.isRequired
};
