const { Router } = require("express");
const authCtrl = require("../controllers/authorization.js");
const { authRequired, isAdmin } = require("../middlewares/tokenValidation.js");

const router = Router();



router.post("/register", authCtrl.register); 
router.post("/login", authCtrl.login); 
router.post("/logout", authCtrl.logout); 


router.delete("/profile/:id", [authRequired, isAdmin], authCtrl.deleteUser); // Ruta para eliminar un usuario por su ID (DELETE /api/profile/:id)
router.put("/profile/:id", [authRequired, isAdmin], authCtrl.updateUser); // Ruta para actualizar un usuario por su ID (PUT /api/profile/:id)

module.exports = router;