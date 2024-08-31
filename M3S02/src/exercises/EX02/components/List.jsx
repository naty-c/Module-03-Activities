// Exercise 02 - Task List

import { useState, useEffect } from 'react';
import './List.css';

function TaskList() {
  // Declare a state 'tasks' to store the list of tasks
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');   // Use localStorage to load saved tasks

    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Declare a state 'task' to store the input for a new task
  const [task, setTask] = useState('');

  // Save tasks in localStorage everytime the list changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    setTasks([...tasks, task]); // Create an array with existing tasks and a new task
    setTask(''); // Clean input
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index); // Filter all tasks except the one with the index passed, '_' is used to indicate that the value is not used 
    setTasks(newTasks); // Update the list
  };

  return (
    <div className="listContainer">
      <h1>EX02 - Tasklist</h1>
      <div className="inputContainer">
        <input className="listInput"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="New task"
      />
        <button className="listButton" onClick={addTask}>Add</button>
      </div>
      <ul className="listGroup">
        {tasks.map((t, index) => ( // 't' is used to display the task text
          <li key={index}>
            {t} <button onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
