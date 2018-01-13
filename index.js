const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys.js')
require('./services/passport');

mongoose.connect(keys.mongoURI);

// Sets up configuration that will listen for incoming requests 
const app = express();

// Require returns a function, and we call it with the (app) object
require('./routes/authRoutes')(app);

// Dynamically figure out what Heroku tells us to listen to 
const PORT = process.env.PORT || 5000;
app.listen(PORT);
