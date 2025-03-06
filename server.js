const express = require('express');
const cors = require('cors');
const app = express();

// Enable all CORS requests
app.use(cors({
  origin: "http://127.0.0.1:8080",
  credentials: true,
  
}));


app.put('/data', (req, res) => {
  res.json({ message: 'CORS is now enabled!' });
});

app.listen(3000);
