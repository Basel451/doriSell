async function main() {
  const dotenv = require("dotenv").config();
  const express = require("express");
  const app = express();

  const cors = require("cors");
  app.use(
    cors({
      origin: "http://localhost:3000",
    })
  );
  app.use(express.json());
  // Baue verbindung zur Datenbank auf
  const dbConnection = require("./database/connection");
  await dbConnection.connectDatabase();

  // Routen erstellen
  const Controller = require("./routes");
  app.post("/register", Controller.register);
  app.post("/login", Controller.login);

  app.listen(process.env.PORT || 5000, () => {
    console.log("HELLO Server is running on ", process.env.PORT || 5000);
  });
}
main();
