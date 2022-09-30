//constante de todos los modelos
const models = {
    pacienteModel: require("./patient"),
    medicoModel: require("./doctor"),
    appointmentModel: require("./appointment"),
    specialtieModel: require("./specialtie"),
    reviewModel: require("./review"),
    scheduleModel: require("./schedule"),
    adminModel: require("./admin"),
};

module.exports = models;