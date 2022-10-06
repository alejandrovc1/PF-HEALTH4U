//Utilizando los esquemas creamos los modelos
const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
    service: {
        type: String,
    },
    date: {
        type: Date,
    },
    review: {
        type: String,
    },
    calification: {
        type: Number,
    },
    patient: {
        type: String,
    },
    doctor: {
        type: String
    }
},
{
    timestamps: true,
    versionKey: false,
});

const ReviewModel = model("Review", reviewSchema);

module.exports = ReviewModel;
