// Example test for TaskRepository
const TaskRepository = require('../../src/data/repositories/TaskRepository');

test('createTask should add a new task', () => {
  const task = { title: 'New Task' };
  const result = TaskRepository.createTask(task);

  expect(result).toEqual({ id: 1, title: 'New Task', completed: false });
  expect(TaskRepository.getTasks()).toContainEqual(result);
});
