import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { ERROR_ROUTE, HOME_ROUTE } from '../../constants/routes';
import './header.css';
export default function Header () {
  const navigate = useNavigate();
  return (
    <header className="outerPadding">
      <div className="headerName">
        <h2>The Artifact</h2>
        <h3>
          <i>Culture and Art Blog</i>
        </h3>
      </div>
      <nav className="headerNav">
        <a onClick={() => navigate(ERROR_ROUTE)} href="">Blog</a>
        <a href="" onClick={() => navigate(HOME_ROUTE)} >About</a>
        <a href="">Contact</a>
      </nav>
    </header>
  );
}
