const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    id: {
        type: String,
    },
    userName: {
        type: String,
        unique: true,
    },
    role: {
        type: String,
    },
},
{
    timestamps: true,
    versionKey: false,
});

const userModel = model("User", userSchema);

module.exports = userModel;