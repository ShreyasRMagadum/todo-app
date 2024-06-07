const express = require('express');
const bodyParser = require('body-parser');
const TaskService = require('../services/TaskService');
const config = require('config');

const app = express();
app.use(bodyParser.json());

app.get('/tasks', async (req, res) => {
  const tasks = await TaskService.getTasks();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const task = await TaskService.createTask(req.body);
  res.json(task);
});

app.delete('/tasks/:id', async (req, res) => {
  await TaskService.deleteTask(req.params.id);
  res.status(204).send();
});

const port = config.get('port');
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
