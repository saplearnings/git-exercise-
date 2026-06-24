const express = require('express');
const dayjs = require('dayjs');
const { getTasks, getTasksPromise } = require('./taskManager');

// Task 1: Custom Module — log tasks
const tasks = getTasks();
console.log('Tasks from Custom Module:', tasks);

// Task 2: Promise — consume with .then()
getTasksPromise()
  .then((tasks) => {
    console.log('Tasks from Promise:', tasks);
  })
  .catch((err) => {
    console.error('Promise error:', err);
  });

// Task 2: async/await — consume the promise
async function displayTasksAsync() {
  try {
    const tasks = await getTasksPromise();
    console.log('Tasks from async/await:', tasks);
  } catch (err) {
    console.error('Async/await error:', err);
  }
}
displayTasksAsync();

// Task 3: Express server with dayjs and /tasks route
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const currentDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
  res.send(`Current Date and Time: ${currentDate}`);
});

app.get('/tasks', (req, res) => {
  const tasks = getTasks();
  res.json(tasks);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
