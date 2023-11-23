/*const mongoose = require("mongoose");
require("dotenv").config();

const DB_HOST = process.env.DB_HOST;
const ATLAS_DB = process.env.ATLAS_DB;

const connectDB = mongoose
  .connect(ATLAS_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Conected");
  })
  .catch((err) => console.log(err));

module.exports = connectDB; */

const mongoose = require("mongoose");
require("dotenv").config();

const ATLAS_DB = process.env.ATLAS_DB;

const connectDB = async () => {
  try {
    await mongoose.connect(ATLAS_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

module.exports = connectDB;
