import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('/tasks')
      .then(response => response.json())
      .then(data => setTasks(data));
  }, []);

  const addTask = (task) => {
    fetch('/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
    .then(response => response.json())
    .then(newTask => setTasks([...tasks, newTask]));
  };

  const deleteTask = (id) => {
    fetch(`/tasks/${id}`, { method: 'DELETE' })
    .then(() => setTasks(tasks.filter(task => task.id !== id)));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
