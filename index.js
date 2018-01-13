const express = require('express');

// Single application of express
// Sets up configuration that will listen for incoming requests 
  // that are being routed
const app = express();

app.get('/', (req, res) => {
  res.send({ bye: 'buddy' });
});

// Dynamically figure out what Heroku tells us to listen to 
const PORT = process.env.PORT || 5000;
app.listen(PORT);
