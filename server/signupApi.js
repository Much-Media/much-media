const express = require('express');
const path = require('path');
const signupController = require('./signupController')
const cookieController = require('./cookieController')

const router = express.Router();

router.post('/', signupController.createUser, cookieController.setCookie, (req, res) => {
  return res.sendStatus(200);
})

module.exports = router;