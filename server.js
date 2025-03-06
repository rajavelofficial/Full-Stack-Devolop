const express = require('express');
const cors = require('cors');
const app = express();

// Enable all CORS requests
app.use(cors({
  
}));


app.get('/', (req, res) => {
  res.json({ message: 'CORS is now enabled!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
