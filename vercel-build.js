const express = require('express');
const { createServer } = require('http');
const { join } = require('path');

const app = express();

// Serve static files from the 'dist' directory (adjust as needed)
app.use(express.static(join(__dirname, 'dist')));

// Handle all other routes
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// Create HTTP server
const server = createServer(app);

// Define the port (adjust as needed)
const PORT = process.env.PORT || 3000;

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
