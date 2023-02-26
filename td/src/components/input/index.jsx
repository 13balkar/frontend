import propTypes from 'prop-types';
import * as React from 'react';
// import { CREATE_TASK } from '../../constants/apiEndPoints';
// import makeRequest from '../../utils/makeRequest';
import './input.css';
export default function Input ({ handleSubmit }) {
  const [value, setValue] = React.useState('');
  // const [newTask, setNewTask] = React.useState();
  const updateInput = (e) => {
    setValue(e.target.value);
  };
  // React.useEffect(() => {
  //   if (!newTask) return;
  //   makeRequest(CREATE_TASK);
  // }, [newTask]);

  return (
    <div className="new-task">
      <input type="text" value={value} onChange={updateInput}></input>
      <button onClick={() => { handleSubmit(value); setValue(''); }}>+</button>
    </div>
  );
}

Input.propTypes = {
  handleSubmit: propTypes.func.isRequired
};
