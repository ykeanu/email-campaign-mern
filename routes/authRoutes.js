const passport = require("passport");

module.exports = app => {
  // User hits this route to begin oauth process
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  // Callback to google to request user info
  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    // Function attached automatically to request object by passport
    req.logout();
    // Test to see if you are no longer signed in, should return 'undefined'
    res.send(req.user);
  });

  // Test if req.user exists, if so cookie works
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
