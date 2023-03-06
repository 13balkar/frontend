import propTypes from 'prop-types';
import * as React from 'react';
import './tasks.css';
export default function Task ({ tasks, handleDelete, changeStatus }) {
  return (
    <div className='tasks'>
      {tasks.map((task) => (
        <div key={task.id} className="container">
          <div onClick={() => changeStatus(task.id)} style = { task.isComplete === true ? { textDecoration: 'line-through' } : { textDecoration: 'none' }} id={task.id} className="task-name">
            <h2 >{task.taskName}</h2>
          </div>
          <div className="task-button">
            <h1 onClick={() => handleDelete(task.id)}>-</h1>
          </div>
        </div>
      ))}
    </div>
  );
}

Task.propTypes = {
  tasks: propTypes.array.isRequired,
  handleDelete: propTypes.func.isRequired,
  changeStatus: propTypes.func.isRequired
};
