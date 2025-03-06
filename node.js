const express = require('express');
const app = express();

// Allow all origins
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // You can replace '*' with specific domain, e.g. 'http://example.com'
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'CORS headers manually set!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
