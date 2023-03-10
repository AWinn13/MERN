import React from 'react';

const Task = ({ task, index, completeTask, removeTask }) => {
  return (
    <div
      className='d-flex w-50 mx-auto justify-content-around align-center'
      
    >
      <input
        type='checkbox'
        checked={task.isComplete}
        onChange={() => completeTask(index)}
      />
      
      <div style={{ textDecoration: task.isComplete  ? 'line-through' :'' }}>{task.task}</div>

      <button
        className='btn btn-outline-dark'
        onClick={() => removeTask(index)}
      >
        Delete
      </button>
    </div>
  );
};
export default Task;
