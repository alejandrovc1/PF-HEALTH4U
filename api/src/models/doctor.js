//MODELO DOCTOR
//Utilizando los esquemas creamos los modelos
const { Schema, model } = require("mongoose");
//const mongooseDelete = require("mongoose-delete");
const bcrypt = require('bcryptjs')

//Mongo da una id predeterminadamente, no es necesario declarar
const doctorSchema = new Schema({
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
    status: {
        type: String,
    },
    specialtie: {
        type: String
    },
    //Metodo de la consulta (Virtual, At home, Private office)
    method: {
        type: String
    },
    //CLOUDINARY
    image: {
        type: String
    },
    description: {
        type: String
    },
    rating: {
        type: Number
    },
    role: {
        type: String
    },
    country: {
        type: String
    }
},
{
    timestamps: true,
    versionKey: false,
});
    
//Metodos del modelo
doctorSchema.statics.encryptPassword = async (password) => {
    //Un salt es un string que hace que el hash sea inpredecible
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

doctorSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}
const doctorModel = model("Doctor", doctorSchema);

module.exports = doctorModel;
