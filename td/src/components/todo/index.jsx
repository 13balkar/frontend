import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CREATE_TASK, DELETE_TASK, GET_TASKS, UPDATE_TASK } from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import Input from '../input';
import Task from '../tasks';
import Timer from '../timer';
import './todo.css';
export default function Todo () {
  const [tasks, setTasks] = React.useState([]);
  const navigate = useNavigate();
  React.useEffect(() => {
    makeRequest(GET_TASKS, { headers: { token: localStorage.getItem('token'), username: localStorage.getItem('username') } }, navigate)
      .then(response => {
        setTasks(response);
      });
  }, []);

  const handleSubmit = async (task) => {
    console.log(task);
    if (task === '') return;
    await makeRequest(CREATE_TASK, { data: { taskName: task }, headers: { token: localStorage.getItem('token'), username: localStorage.getItem('username') } }, navigate);
    makeRequest(GET_TASKS)
      .then(response => {
        setTasks(response);
      });
  };
  const handleDelete = async (index) => {
    await makeRequest(DELETE_TASK(index), { headers: { token: localStorage.getItem('token'), username: localStorage.getItem('username') } }, navigate);
    makeRequest(GET_TASKS)
      .then(response => {
        setTasks(response);
      });
  };
  const checkStatus = async (id) => {
    await makeRequest(UPDATE_TASK(id), { headers: { token: localStorage.getItem('token'), username: localStorage.getItem('username') } }, navigate);
    makeRequest(GET_TASKS)
      .then(response => {
        setTasks(response);
      });
  };
  return (
        <div className='body'>
            <Timer />
            <Input handleSubmit={handleSubmit} />
            <Task tasks={tasks} handleDelete={handleDelete} changeStatus={checkStatus} />
        </div>
  );
}
