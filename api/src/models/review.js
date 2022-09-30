//Utilizando los esquemas creamos los modelos
const { Schema, model } = require("mongoose");
//const mongooseDelete = require("mongoose-delete");

//Mongo da una id predeterminadamente, no es necesario declarar
const reviewSchema = new Schema({
    service: {
        type: Number,
    },
    date: {
        type: Date,
    },
    review: {
        type: String,
    },
},
{
    timestamps: true,
    versionKey: false,
});

const ReviewModel = model("Review", reviewSchema);

module.exports = ReviewModel;
