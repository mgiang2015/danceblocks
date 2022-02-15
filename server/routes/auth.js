var express = require("express");
var passport = require('passport');
var LocalStrategy = require('passport-local');
var crypto = require('crypto');
var db = require('../db');

var router = express.Router();

router.get("/auth", function(req, res, next) {
    res.send("Auth API is working properly");
});

module.exports = router;