import * as React from 'react';
import './cardList.css';
import { makeRequest } from '../../utils';
import { GET_RECORDS } from '../../constants/apiEndPoints';
import Card from '../card';
import Genre from '../genre';

const CardList = () => {
  const [songs, setSongs] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [genre, setGenre] = React.useState(0);
  const [genreMap, setGenreMap] = React.useState();

  React.useEffect(() => {
    makeRequest(GET_RECORDS)
      .then((response) => {
        setSongs(response);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const clickHandler = () => {
    setGenre(!genre);
    const genreMp = songs.reduce((acc, song) => {
      if (acc[song.genre.name]) {
        acc[song.genre.name].push(song);
      } else {
        acc[song.genre.name] = [song];
      }
      return acc;
    }, { });
    setGenreMap(genreMp);
  };

  if (error) {
    return <h1>Error</h1>;
  }
  const content = (<div className="cardBlock">
    <p><b>all songs</b> <img onClick={clickHandler} src= '/assets/icon-genre.svg' alt="genre" /></p>
    <div className="cardList">
    {songs.map((song) => (
    <Card key={song.id} song={song} />
    ))}
    </div>
    </div>);

  const genreContent = (<div className="cardBlock">
    <p><b>genres</b> <img onClick={clickHandler} src='/assets/icon-grid.svg' alt="genre" /></p>
    <div className="cardList">
    {genreMap !== undefined && Object.keys(genreMap).map((key) => (
    <Genre key={key} post={genreMap[key]} genre={key} />
    ))}
    </div>
    </div>);

  return songs
    ? !genre ? content : genreContent
    : <div>loading</div>;
};

export default CardList;
