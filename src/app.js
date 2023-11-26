const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes.js");
const routes = require("./routes/routes.js");
const { createRoles } = require("./helpers/initialConfig.js");
const path = require("path");

const app = express();

//const initializeApp = async () => {
     createRoles(); // Espera a que createRoles() se complete antes de continuar con la inicialización de la aplicación
  
    app.set("views", path.join(__dirname, "views"));
  
    app.use(morgan("dev"));
    app.use(express.json());
    app.use(cookieParser());
  
    //app.use("/api", authRoutes);
    app.use(authRoutes)
    app.use(routes);
  
    app.use(express.static(path.join(__dirname, "public")));
    app.use(express.static(path.join(__dirname, "views")));
    app.use(express.static(path.join(__dirname, "assets")));
  //};
  
  //initializeApp().then(() => {
   // app.listen(3000, () => {
    //  console.log("Server is running on port 3000");
  //  });
  //}).catch((error) => {
  //  console.error("Error initializing the app:", error);
  //});
  
  

module.exports = app;

