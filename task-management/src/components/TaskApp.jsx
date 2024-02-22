// src/components/TaskApp.js

import React, { useState } from 'react';

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks((prevTasks) => [...prevTasks, { id: Date.now(), text: newTask }]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1>Task Management App</h1>
      <div>
        <label>
          Add New Task:
          <input type="text" value={newTask} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <div>
        <h2>Tasks</h2>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <span>{task.text}</span>
              <button type="button" onClick={() => handleRemoveTask(task.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskApp;
