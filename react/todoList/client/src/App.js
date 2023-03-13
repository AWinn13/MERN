import './App.css';


import React, { useState } from 'react';
import Task from './components/Task';
import TaskForm from './components/TaskForm';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = newTask => {
    setTasks([...tasks, newTask]);
  };


  const completeTask = index => {
    const newTasks = [...tasks];
    newTasks[index].isComplete = !newTasks[index].isComplete;
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <TaskForm addTask={addTask} />
      <div>
        {tasks.map((tasks, index) => (
          <Task
            index={index}
            task={tasks}
            completeTask={completeTask}
            removeTask={removeTask}
          />
        ))}

      </div>
    </div>
  );
}

export default App;


let nums1 = [2,7,11,15]
let target1 = 9
var twoSum = function(nums, target) {
