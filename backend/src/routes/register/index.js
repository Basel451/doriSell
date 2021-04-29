const User = require("../../database/models/user.models");

async function register(req, res) {
  // Gibt es diese email  schon?
  if (await User.findOne({ email: req.body.email })) {
    return res.status(401).json({
      message: "Registration failed.",
    });
  }

  // erstelle neuen Benutzer
  const user = new User(req.body);

  user.save();

  return res.status(201).json({
    message: "user created",
  });
}

module.exports = register;
