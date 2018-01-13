const passport = require('passport');

module.exports = (app) => {
// User hits this route to begin oauth process
  app.get(
    '/auth/google', 
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  // Callback to google to request user info
  app.get('/auth/google/callback', passport.authenticate('google'));

};