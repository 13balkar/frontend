import { PropTypes } from 'prop-types';
import * as React from 'react';
import './card.css';
import Description from './desc';
import Image from './img';
import Reaction from './reactions';

export default function Card ({ post }) {
  const [count, setCount] = React.useState(post.claps);
  const [like, setLike] = React.useState(post.liked);
  const clapping = () => {
    setCount(count + 1);
  };
  const liker = () => {
    setLike(!like);
  };
  return (
    <div className="container">
      <Image src={require(`../../assets/Images/${post.image}`)} alt={post.imgAlt} />
      <Description
        date={post.date}
        time={post.readingTime}
        title={post.title}
        description={post.description}
      />
      <Reaction count={count} liked={like} clapping={clapping} liker={liker} />
    </div>
  );
}

// write prop validation for post
Card.propTypes = {
  post: PropTypes.shape({
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    readingTime: PropTypes.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    claps: PropTypes.number.isRequired,
    liked: PropTypes.bool.isRequired,
    imgAlt: PropTypes.string.isRequired
  }).isRequired
};
