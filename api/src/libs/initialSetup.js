//Archivo para crear roles por defecto cuandos se ejecute el servidor
const Role = require('../models/role')

module.exports.createRoles = async () => {
    try {
        //funcion para validar si ya existen documentos
        const count = await Role.estimatedDocumentCount()

        if (count > 0) return;

        //Ejecuta todas las funciones al mismo tiempo
        const values = await Promise.all([
            new Role({ name: 'admin' }).save(),
            new Role({ name: 'doctor' }).save(),
            new Role({ name: 'patient' }).save()
        ])

        console.log(values)
    } catch (error) {
        console.error(error)
    }
}
