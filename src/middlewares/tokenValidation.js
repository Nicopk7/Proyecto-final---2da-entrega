const jwt = require("jsonwebtoken");
const dtenv = require("dotenv").config();
const User = require("../models/userModel.js");
const Role = require("../models/roleModel.js");

const SECRET_KEY = process.env.SECRET_KEY; 


exports.authRequired = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return res.redirect("/login");//res.status(401).json({ message: "no token provided" });

  const decoded = jwt.verify(token, SECRET_KEY);
  req.userId = decoded.id;

  const user = await User.findById(req.userId, { password: 0 }); // Buscamos al usuario en la base de datos excluyendo la contraseña
  if (!user) return res.status(404).json({ message: "No user found" });

  next(); 
};


exports.isAdmin = async (req, res, next) => {
  const user = await User.findById(req.userId);
  console.log(user);
  const roles = await Role.find({ _id: { $in: user.roles } });

  for (let i = 0; i < roles.length; i++) {
    if (roles[i].name == "admin") {
      next();
      return;
    }
  }

  return res.status(403).json({ message: "Admin required" });
};