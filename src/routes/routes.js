const { Router } = require("express");
const router = Router();
const { authRequired, isAdmin } = require("../middlewares/tokenValidation.js");
const path = require("path");

//home
router.get("/", (req,res)=>{
  const filePath = path.join(__dirname, "..", "views", "index.html");
  res.sendFile(filePath);
})

//catalogo
router.get("/catalogo", authRequired, (req,res) => {
  const filePath = path.join(__dirname, "..", "views", "layouts", "catalogo.html");
  res.sendFile(filePath);
})

//mas leidos

router.get("/mas_leidos",authRequired, (req,res) => {
  const filePath = path.join(__dirname, "..", "views", "layouts", "mas_leidos.html");
  res.sendFile(filePath);
})

//suscribete

router.get("/suscribete", (req, res) => {
  const filePath = path.join(__dirname, "..", "views", "layouts", "formulario.html");
  res.sendFile(filePath);
})

//login

router.get("/login", (req, res) => {
  const filePath = path.join(__dirname, "..", "views", "layouts", "login.html");
  res.sendFile(filePath);
})

//register

router.get("/register", (req,res) => {

 const filePath = path.join(__dirname, "..", "views", "layouts", "register.html");
  res.sendFile(filePath);
})

//users ADMIN ONLY

router.get("/users", (req,res) => {
  const filePath = path.join(__dirname, "..", "views", "layouts", "users.html");
  res.sendFile(filePath);
})


module.exports = router;