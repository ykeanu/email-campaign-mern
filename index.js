const express = require("express");
const mongoose = require("mongoose");
// Give us access to cookies
const cookieSession = require("cookie-session");
// Tell passport to make use of them
const passport = require("passport");
const keys = require("./config/keys.js");
// Order matters, need to load in user model before executing passport
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

// Sets up configuration that will listen for incoming requests
const app = express();

// Allows use of cookies
app.use(
  // Configuration object for cookie
  cookieSession({
    // How long cookie exists in browser before automatically expired (units: milliseconds)
    maxAge: 30 * 24 * 60 * 60 * 1000,
    // 30 days conversion to milliseconds
    keys: [keys.cookieKey]
  })
);
// Instructs passport to make use of cookies to handle authentication
app.use(passport.initialize());
app.use(passport.session());

// Require returns a function, and we call it with the (app) object
require("./routes/authRoutes")(app);

// Dynamically figure out what Heroku tells us to listen to
const PORT = process.env.PORT || 5000;
app.listen(PORT);
