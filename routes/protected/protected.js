const express = require('express')
const router = express.Router()

//middleware
const authorizations = require('../../middleware/tokenVerification')

router.get('/', authorizations, (req, res) => {
     // If the authentication middleware succeeds, return a success response
     res.json({ message: 'You have accessed the protected API' });
});

module.exports =router;