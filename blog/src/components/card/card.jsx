import { PropTypes } from 'prop-types';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { UPDATE_BLOG_POST } from '../../constants/apiEndPoints';
import { makeRequest } from '../../utils';
import './card.css';
import Description from './desc';
import Image from './img';
import Reaction from './reactions';

export default function Card ({ post }) {
  const [count, setCount] = React.useState(post.claps);
  const [like, setLike] = React.useState(post.liked);
  const navigate = useNavigate();

  React.useEffect(() => {
    makeRequest(UPDATE_BLOG_POST(post.id), { data: { claps: count, liked: like } }, navigate);
  }, [count, like]);

  const clapping = () => {
    setCount(count + 1);
  };
  const liker = () => {
    setLike(!like);
  };
  return (
    <div className="container">
      <Image src={post.image} alt='abcd' />
      <Description
        date={post.date}
        time={post.reading_time}
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
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    reading_time: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    claps: PropTypes.number.isRequired,
    liked: PropTypes.bool.isRequired
  }).isRequired
};
