const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registrationSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    year: {
        type: String,
    },
    college: {
        type: String,
    },
    message: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("register", registrationSchema);
