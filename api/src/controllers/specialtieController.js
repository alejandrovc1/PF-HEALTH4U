const { specialtieModel } = require('../models/models');
const cloudinary = require('cloudinary')

const getAllSpecialties = async () => {
    try {
        const response = await specialtieModel
            .find({})
        if (response) {
            return response
        } else {
            res.send({ msg: "Thereś no specialties in the DB" });
        }

    } catch (e) {
        console.error(e);
        throw new Error("Error. Specialties can't be showed.")
    }
}

const addSpecialtie = async (Data) => {
    try {
        const { name, description, image } = Data
        const found = await specialtieModel.findOne({ name: name })

        if (!found) {
            const result = await cloudinary.uploader.upload(image, {
                //nombre del folder que se crea con las fotos, si no existe se crea automaticamente
                folder: specialtiePhotos,
            })
            const add = await specialtieModel.create({
                name,
                description,
                image: result.secure_url,
            })
            return add
        } else {
            res.send({ msg: "This specialtie already exists" });
        }

    } catch (e) {
        console.error(e);
        throw new Error("Error. Specialtie can't be added.")
    }
}

module.exports = {
    getAllSpecialties,
    addSpecialtie,
};
