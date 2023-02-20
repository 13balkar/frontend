import * as React from 'react';
import './header.css';
export default function Header () {
  return (
    <header className="outerPadding">
      <div className="headerName">
        <h2>The Artifact</h2>
        <h3>
          <i>Culture and Art Blog</i>
        </h3>
      </div>
      <nav className="headerNav">
        <a href="">Blog</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </nav>
    </header>
  );
}
