//constante de todos los modelos
const models = {
    patientModel: require("./patient"),
    doctorModel: require("./doctor"),
    appointmentModel: require("./appointment"),
    specialtieModel: require("./specialtie"),
    reviewModel: require("./review"),
    scheduleModel: require("./schedule"),
    adminModel: require("./admin"),
};

module.exports = models;