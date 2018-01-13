const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Sets up configuration that will listen for incoming requests 
const app = express();

passport.use(new GoogleStrategy());

// Dynamically figure out what Heroku tells us to listen to 
const PORT = process.env.PORT || 5000;
app.listen(PORT);
