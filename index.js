const express = require('express');
const app = express();

// Define a route for the hello message
app.get('/api/hello', (req, res) => {
  res.send('Hello from the backend!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
