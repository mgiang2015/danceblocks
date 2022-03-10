/**
 * Code adapted from https://www.freecodecamp.org/news/learn-how-to-handle-authentication-with-node-using-passport-js-4a56ed18e81e/
 */
const express = require('express');
const router = express.Router();

// When /api is called, route to folder api
router.use('/api', require('./api'));

module.exports = router;