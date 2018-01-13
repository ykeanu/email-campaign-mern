const express = require('express');

// Single application of express
// Sets up configuration that will listen for incoming requests 
  // that are being routed
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

app.listen(5000);
