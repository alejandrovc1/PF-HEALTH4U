const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname; 

// Se le quita la extensión del archivo
const removeExtension = (fileName) => {
    return fileName.split(".").shift();
};

// Crea un enlace a cada ruta creada en la carpeta
const a = fs.readdirSync(PATH_ROUTES).filter((file) => {
    const name = removeExtension(file);
    if (name !== "index") {
        router.use(`/${name}`, require(`./${file}`)); //http:localhost:3000/api/tracks
    }
});

module.exports = router;