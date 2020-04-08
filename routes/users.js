const express = require('express');
const secured = require('../lib/middleware/secured');
const router = express.Router();

const db = require("../models");

/* GET user profile. */
router.get('/findUser', secured(), function (req, res, next) {
  const { _raw, _json, ...userProfile } = req.user;
  console.log(_json);
  db.User.findOne({
    where: {
      email: _json.email,
    },
    raw: true,
  }).then(function (profile) {
    console.log(profile)
    res.render("profile", profile)
  })
});



module.exports = router;
