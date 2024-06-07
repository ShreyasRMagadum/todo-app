const TaskRepository = require('../../data/repositories/TaskRepository');

const getTasks = () => {
  return TaskRepository.getTasks();
};

const createTask = (task) => {
  return TaskRepository.createTask(task);
};

const deleteTask = (id) => {
  return TaskRepository.deleteTask(id);
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
};
