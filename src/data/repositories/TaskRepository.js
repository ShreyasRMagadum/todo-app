const Task = require('../models/TaskModel');

let tasks = [];
let nextId = 1;

const getTasks = () => tasks;

const createTask = ({ title }) => {
  const task = new Task(nextId++, title);
  tasks.push(task);
  return task;
};

const deleteTask = (id) => {
  tasks = tasks.filter(task => task.id !== parseInt(id));
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
};
