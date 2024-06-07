// Example test for TaskList component
const { render, screen } = require('@testing-library/react');
const React = require('react');
const TaskList = require('../../src/presentation/components/TaskList');

test('renders tasks', () => {
  const tasks = [{ id: 1, title: 'Test Task' }];
  render(<TaskList tasks={tasks} />);
  const taskElement = screen.getByText(/Test Task/i);
  expect(taskElement).toBeInTheDocument();
});
