// Require necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
//routes
const loginRoute = require('./routes/open/login');
const registerRoute = require('./routes/open/signup');
const booksRoute = require('./routes/protected/books');
const homeRoute = require('./routes/protected/protected');
//
require('dotenv').config();
// Create an instance of express app
const app = express();
//db connectivity
const connect = require('./models/DB');
connect();

// Set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())

app.use('/api/login', loginRoute);
app.use('/api/register', registerRoute);
app.use('/api/books', booksRoute);
app.use('/api/home', homeRoute);





app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(require('./swagger')))

app.listen(process.env.PORT, () => console.log(`Example app listening on port ${process.env.PORT}!`))
