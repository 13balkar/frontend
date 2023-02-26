import * as React from 'react';
import './timer.css';
export default function Timer () {
  const [time, setTime] = React.useState(
    new Date().getHours() +
      ':' +
      new Date().getMinutes() +
      ':' +
      new Date().getSeconds()
  );
  setInterval(() => {
    setTime(
      new Date().getHours() +
        ':' +
        new Date().getMinutes() +
        ':' +
        new Date().getSeconds()
    );
  }, 1000);
  return (
    <div className="timer">
      <h1>{time}</h1>
    </div>
  );
}
