//La carpeta middlewares contiene middlewares personalizados para proteger rutas
//exporta todos los middlewares
const {verifyToken,isAdmin,isDoctor,isPatient} = require("./authJwt")
const {checkRolesExisted,checkDuplicatedUser} = require("./verifySignup")

module.exports = {verifyToken,isAdmin,isDoctor,isPatient,checkRolesExisted,checkDuplicatedUser}