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
            type: Array,
            required: true,
        },
        Country: {
            type: String,
            required: true,
        },  
        

    }
);

module.exports = mongoose.model("Donate", Donate_Schema);

// {
//     'Name':'hannah',
//     'Email' : 'hannah@gmail.com',
//     'PhoneNumber' :'0923456789',
//     'Organization' : 'ECS',
//     'Country' : 'Ethiopia'
//   }