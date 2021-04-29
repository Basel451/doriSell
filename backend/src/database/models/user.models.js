const mongoose = require("mongoose");
const argon = require("argon2");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  vorname: {
    type: String,
    required: true,
  },
  telefonnummer: {
    type: Number,
    required: false,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  ort: {
    type: String,
    required: false,
    default: "nicht bekannt",
  },
  benutzername: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await argon.hash(this.password);
    this.password = hashed;
  }
  done();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
