// Example test for TaskService
const TaskService = require('../../src/business/services/TaskService');
const TaskRepository = require('../../src/data/repositories/TaskRepository');

jest.mock('../../src/data/repositories/TaskRepository');

test('createTask should add a new task', () => {
  const task = { title: 'New Task' };
  TaskRepository.createTask.mockReturnValue({ id: 1, ...task });

  const result = TaskService.createTask(task);

  expect(result).toEqual({ id: 1, ...task });
  expect(TaskRepository.createTask).toHaveBeenCalledWith(task);
});
