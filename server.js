const express = require('express');
const cors = require('cors');
const app = express();

// Enable all CORS requests
app.use(cors());

// Or specify specific origins if needed
// app.use(cors({
//   origin: 'http://example.com'  // Allow only this origin
// }));

app.get('/', (req, res) => {
  res.json({ message: 'CORS is now enabled!' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
