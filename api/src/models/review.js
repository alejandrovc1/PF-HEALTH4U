//Utilizando los esquemas creamos los modelos
const { Schema, model } = require("mongoose");
const Patient = require("./patient")
const Doctor = require("./doctor")

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
    score: {
        type: Number,
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient',
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor',
    }
},
{
    timestamps: true,
    versionKey: false,
});

const ReviewModel = model("Review", reviewSchema);

module.exports = ReviewModel;
