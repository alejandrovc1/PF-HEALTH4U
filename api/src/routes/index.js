const express = require("express");
// const fs = require("fs");
const router = express.Router();
const appointments = require ("./appointments")
const doctors = require ("./doctors")
const specialties = require ("./specialties")
const patients = require ("./patients")
const login = require ("./login")


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

router.get("*", (req, res) => {
    res.status(404).send('What are you looking for?')
})

module.exports = router;