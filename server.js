const express = require('express');

const hostname = '127.0.0.1';
const port = 3000;

// Initialize Express application
const app = express();

// Route handler for the root endpoint returning "Hello, World!" responses
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello, World!\n');
});

// Route handler for the evening endpoint returning "Good evening" responses
app.get('/evening', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Good evening');
});

// Start Express server with structured routing and middleware layers
app.listen(port, hostname, () => {
  console.log(`Express.js server running at http://${hostname}:${port}/`);
  console.log(`Available endpoints:`);
  console.log(`- GET / (Hello, World!)`);
  console.log(`- GET /evening (Good evening)`);
});
