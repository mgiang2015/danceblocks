/**
 * Code adapted from https://www.freecodecamp.org/news/learn-how-to-handle-authentication-with-node-using-passport-js-4a56ed18e81e/
 */
const express = require('express');
const router = express.Router();

// If people call /api/users, route to users folder
// For future apis (circles for example), route through here
router.use('/users', require('./users'));

module.exports = router;