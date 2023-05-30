const mongoose = require("mongoose")
const Validator = require("validator");

const Donate_Schema = new mongoose.Schema(
    {

        Name: {
            type: String,
            required: true,
        },

        Email: {
            type: String,
            required: true,
            lowercase: true,
            validate: [Validator.isEmail, "Please provide a valid email"],
        },

        PhoneNumber: {
            type: String,
            required: true,
        },

        Organization: {
            type: String,
            required: true,
        },
        Country: {
            type: String,
            required: true,
        },  
        

    }
);

module.exports = mongoose.model("Donation", Donate_Schema);

