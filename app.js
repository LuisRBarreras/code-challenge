const express = require('express');

const app = express();
const port = 3000;
const prefix = 'v1';

// Definition of routes
app.use(`/${prefix}/sensor`, require('./api/sensor'));

// Default route
app.get('/', (req, res) => {
  res.send('Running');
});

app.listen(port, () => {
  console.log(`Application listening at http://localhost:${port}`);
});
