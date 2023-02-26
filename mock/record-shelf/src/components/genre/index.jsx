import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card';
import './genre.css';
const Genre = ({ post, genre }) => {
  const src = '/assets/genre-' + genre + '.png';
  return (
    <div className="genre">
      <div className='heading'>
        <img src={src} alt={genre} />
        <div className='name'>
          <h1>{genre}</h1>
        </div>
      </div>
      <div className="cardList">
        {post.map((song) => (<Card key={song.id} song={song} />))}
      </div>
    </div>
  );
};

Genre.propTypes = {
  post: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired
};

export default Genre;
