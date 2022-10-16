//MODELO DE ADMIN 
//Utilizando los esquemas creamos los modelos
const { Schema, model } = require("mongoose");
//const mongooseDelete = require("mongoose-delete");
const bcrypt = require('bcryptjs')

//Mongo da una id predeterminadamente, no es necesario declarar
const adminSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    role: {
        // [{
        // //Relacionamos el esquema de role al de los usuarios.
        // ref: "Role",
        // type: Schema.Types.ObjectId
        // }]
        type: String,
    }},
    {
        timestamps: true,
        versionKey: false,
    }
);

//metodos
adminSchema.statics.encryptPassword = async (password) => {
    //Un salt es un string que hace que el hash sea inpredecible
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

adminSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}

const adminModel = model("Admin", adminSchema);

module.exports = adminModel;
