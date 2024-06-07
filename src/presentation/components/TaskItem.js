import React from 'react';

const TaskItem = ({ task, onDelete }) => (
  <li>
    {task.title}
    <button onClick={() => onDelete(task.id)}>Delete</button>
  </li>
);

export default TaskItem;
import React from 'react';

const TaskItem = ({ task, onDelete }) => (
  <li>
    {task.title}
    <button onClick={() => onDelete(task.id)}>Delete</button>
  </li>
);

export default TaskItem;
