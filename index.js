const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Parse JSON
app.use(express.json());

// Serve static files
app.use(express.static(__dirname));

// Handle POST request from client
app.post('/location', (req, res) => {
  const { latitude, longitude } = req.body;
  console.log(`Received coordinates: ${latitude},${longitude}`);
  res.send(`Coordinates received: ${latitude},${longitude}`);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
