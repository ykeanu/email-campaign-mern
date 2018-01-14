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

  // Test if req.user exists, if so cookie works
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
