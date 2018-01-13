const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

// Sets up configuration that will listen for incoming requests 
const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    }, (accessToken) => {
      console.log(accessToken);
    }
  )
);

// User hits this route to begin oauth process
app.get(
  '/auth/google', 
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

app.get('/auth/google/callback', passport.authenticate('google'));

// Dynamically figure out what Heroku tells us to listen to 
const PORT = process.env.PORT || 5000;
app.listen(PORT);

