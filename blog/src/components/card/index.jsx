import * as React from 'react';
import data from '../../constants/data.json';
import Card from './card';

export default function Cards () {
  return (
    <main className="outerPadding">
      {data.map((post) => (
        <Card key={Math.random()} post={post} />
      ))}
    </main>
  );
}
