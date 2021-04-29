// gibt es dr User mit Email odder Benutzername
//  passwort mit argon prüfen

const argon2 = require("argon2");
const User = require("../../database/models/user.models");

async function login(req, res) {
  // Gibt es diese email  schon?
  const userobjekt = await User.findOne({ email: req.body.email });
  if (!userobjekt) {
    return res.status(401).json({
      message: "auth failed",
    });
  }

  if (await argon2.verify(userobjekt.password, req.body.password)) {
    return res.status(200).json({
      message: "auth succes",
    });
  }
  return res.status(401).json({
    message: "auth failed",
  });
}

module.exports = login;
