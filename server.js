const express = require('express');
const cors = require('cors'); // Import cors middleware
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes

app.get('/', (req, res) => {
  res.json({
    msg: "hello from backend"
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});