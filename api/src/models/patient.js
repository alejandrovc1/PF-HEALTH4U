//MODELO DE PACIENTE
//Utilizando los esquemas creamos los modelos
const { Schema, model } = require("mongoose");
//const mongooseDelete = require("mongoose-delete");
const bcrypt = require('bcryptjs')

//Mongo da una id predeterminadamente, no es necesario declarar
const patientSchema = new Schema({
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
    birthDate: {
        type: Date,
    },
    genre: {
        type: String
    },
    address:{
        type: String
    },
    token:{
        type: String
    },
    country: {
        type: String
    },
    tel: {
        type: Number
    },
    // CLOUDINARY 
    image: {
        
    },
    role: {
        type: String
    },
<<<<<<< HEAD
    role: {
        type: String
        //[{
        //Relacionamos el esquema de role al de los usuarios.
        //ref: "Role",
        //type: Schema.Types.ObjectId
        //}]
    },
=======
>>>>>>> 7fee5bd4547a648e2823ca786d81b708fc9e4c76
    status: {
        type: String
    }
},
{
    timestamps: true,
    versionKey: false,
});

//Metodos del modelo 
patientSchema.statics.encryptPassword= async (password) => {
    //Un salt es un string que hace que el hash sea inpredecible
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

patientSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}
const patientModel = model("Patient", patientSchema);

module.exports = patientModel;