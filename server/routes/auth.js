var express = require("express");
var router = express.Router();

router.get("/login", function(req, res, next) {
    res.send("Login API is working properly");
});

module.exports = router;