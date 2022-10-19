//Utilizando los esquemas creamos los modelos
const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    message: {
        type: String,
    },
},
{
    timestamps: true,
    versionKey: false,
});

const messagesModel = model("Message", reviewSchema);

module.exports = messagesModel;