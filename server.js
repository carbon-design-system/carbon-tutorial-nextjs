const express = require('express');
const cors = require('cors');

const app = express();

// Middleware to parse JSON bodies (this will help with POST requests)
app.use(express.json());

// Define CORS options
const corsOptions = {
  origin: 'http://localhost:3000', // Allow only this origin to access
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204
};

// Use CORS with options
app.use(cors(corsOptions));

// Define a simple route to test the server
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the CORS-enabled server!' });
});

// Define GET and POST routes for /api/data
app.get('/api/data', (req, res) => {
  // Example response for GET request
  res.json({ message: 'This is a response to a GET request to /api/data.' });
});

app.post('/api/data', (req, res) => {
  // Example response for POST request, echoing back received data
  res.json({ message: 'Data received successfully.', yourData: req.body });
});

// Set the server to listen on port 5000
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
