import React, { useState } from 'react';

const Task = (props) => {
  const [task, setTask] = useState("");
  

    const handleSubmit = e => {
        e.preventDefault();
        props.addTask({task: task, isComplete: false});
        setTask("");
    }



  return (
    <form className='w-50 mx-auto mt-3' onSubmit={handleSubmit}>
      <h4>Task List</h4>
      <div class='form-floating mb-2 border'>
        <input
          onChange={e => setTask( e.target.value)}
          class='form-control'
          type='text'
          id='task'
          placeholder='New Task'
          value={task}
        />
        <label for='task'>New Task</label>
      </div>
      <button type='submit' value='create' class='btn btn-outline-success'>
        Add Task
      </button>
    </form>
  );
};

export default Task