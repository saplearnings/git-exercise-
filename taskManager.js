const fs = require('fs');
const path = require('path');

// Task 1: Global Objects + Standard Module (fs)
const filePath = path.join(__dirname, 'data.json');

const rawData = fs.readFileSync(filePath, 'utf-8');
const parsedData = JSON.parse(rawData);
console.log('File read using fs module:', parsedData);

// Custom Module: function to retrieve tasks
function getTasks() {
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(fileContents).tasks;
}

// Task 2: Promise-based data retrieval
function getTasksPromise() {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data).tasks);
      }
    });
  });
}

module.exports = { getTasks, getTasksPromise };
