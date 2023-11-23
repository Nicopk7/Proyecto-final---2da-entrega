const app = require("./src/app.js");
require('dotenv').config();

const connectDB = require("./src/database.js");

connectDB();

const PORT = process.env.PORT;

app.listen(PORT );
console.log("Servidor escuchando en el puerto", PORT );