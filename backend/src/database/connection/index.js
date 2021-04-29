const mongoose = require("mongoose");

/**
 * Connect funktion: Verbindet sich mit der Datenbank
 * connection.once öffnet den Pfad, sodass wir bspw. queries abfragen können.
 */
async function connectDatabase() {
  await mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

  await mongoose.connection.once("open", () => {
    console.log("Database connection established");
  });
}

module.exports = { connectDatabase };
