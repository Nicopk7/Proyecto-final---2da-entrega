const mongoose = require("mongoose");


exports.connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log("+++++++++ BASE DE DATOS CONECTADA +++++++++");
  } catch (error) {
    console.log(error);
  }
};