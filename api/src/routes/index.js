const express = require("express");
// const fs = require("fs");
const router = express.Router();

const doctors = require("./doctors")
const patients = require("./patients")
const appointments = require("./appointments")
const specialties = require("./specialties")
const reviews = require("./reviews")
const login = require("./login")
const checkRole = require("./checkRole")
const messages = require("./messages")
const admins = require("./admins")

// const PATH_ROUTES = __dirname; 

// // Se le quita la extensión del archivo
// const removeExtension = (fileName) => {
//     return fileName.split(".").shift();
// };

// //Crea un enlace a cada ruta creada en la carpeta
// const a = fs.readdirSync(PATH_ROUTES).filter((file) => {
//     const name = removeExtension(file);
//     if (name !== "index") {
//         router.use(`/${name}`, require(`./${file}`)); //http:localhost:3000/api/tracks
//     }
// });

router.use('/doctors', doctors)
router.use('/patients', patients)
router.use('/appointments', appointments)
router.use('/specialties', specialties)
router.use('/login', login)
router.use('/reviews', reviews)
router.use('/checkrole', checkRole)
router.use('/messages', messages)
router.use('/admins', admins);

router.get('/', (req, res) => {
    res.status(200).send({ message: 'Servidor Activo' })
});


//middleware para el Not Found
router.use((req, res, next) => {
    res.status(404).end()
});

module.exports = router;