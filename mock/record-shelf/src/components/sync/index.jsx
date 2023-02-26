import * as React from 'react';
import './sync.css';
import { useNavigate } from 'react-router-dom';
import { SONGS_PATH } from '../../constants/routes';
const Sync = () => {
  const s = ':((';
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(SONGS_PATH);
  };
  return (
        <div className="sync">
            <p>{s}</p>
            <p>seems a bit empty here</p>
            <button onClick={handleClick} >sync</button>
        </div>
  );
};

export default Sync;
