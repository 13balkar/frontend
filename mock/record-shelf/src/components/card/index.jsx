import * as React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import './card.css';
import CardDescription from '../cardDescription';
import CardReaction from '../cardReaction';
const Card = ({ song }) => {
  return (
      <div className='card'>
        <Image src={song.imageUrl} />
        <div className='text'>
          <CardDescription name={song.name} singer={song.artist.name} />
          <CardReaction id={song.id} />
        </div>
      </div>
  );
};
Card.propTypes = {
  song: PropTypes.object.isRequired
};

export default Card;
