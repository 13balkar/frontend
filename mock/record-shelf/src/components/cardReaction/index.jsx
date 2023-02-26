import * as React from 'react';
import PropTypes from 'prop-types';
import { GET_LIKES_BY_ID, POST_LIKE_BY_ID } from '../../constants/apiEndPoints';
import './rxn.css';
import { makeRequest } from '../../utils';
const cardReaction = ({ id }) => {
  const [likes, setLikes] = React.useState();
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    makeRequest(GET_LIKES_BY_ID(id))
      .then((response) => {
        setLikes(response);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  if (error) {
    return <h1>Err</h1>;
  }

  const handleClick = async () => {
    await makeRequest(POST_LIKE_BY_ID(id), { data: { like: !likes.like } });
    await makeRequest(GET_LIKES_BY_ID(id)).then((response) => { setLikes(response); });
  };

  return likes
    ? (
        <div onClick={handleClick} className='card-rxn'>
            <img src={likes.like ? '/assets/heart-red.svg' : '/assets/heart-gray.svg' } alt="genre" />
            <p>{likes.count}</p>
        </div>
      )
    : <div>loading</div>;
};

cardReaction.propTypes = {
  id: PropTypes.string.isRequired
};

export default cardReaction;
