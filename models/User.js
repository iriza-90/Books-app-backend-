const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const Joi = require("joi");

//user schema
const userSchema = new mongoose.Schema({
     name: { type: String, required: true },
     email: { type: String, required: true },
     password: { type: String, required: true },
});


// Define book schema
const bookSchema = new mongoose.Schema({
     title: { type: String, required: true },
     author: { type: String, required: true },
     description: { type: String, required: true },
});


const validate = (data) => {
     const schema = Joi.object({
          name: Joi.string().required().label("Name"),
          email: Joi.string().email().required().label("Email"),
          password: Joi.string().required().label("Password"),
     });
     return schema.validate(data);
};

const User = mongoose.model("user", userSchema);
const Book = mongoose.model('Book', bookSchema);

module.exports={validate,User,Book}
