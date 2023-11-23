const Role = require("../models/roleModel.js");

exports.createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount();
   //const count = await Role.countDocuments();
    if (count > 0) return;

    const valores = await Promise.all([
      new Role({ name: "user" }).save(),
      new Role({ name: "admin" }).save(),
    ]);

    console.log(valores);
  } catch (error) {
    console.error(error);
  }
};