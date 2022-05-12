const express = require('express');
const path = require('path');
const signupController = require('./signupController')

const router = express.Router();

router.post('/', signupController.createUser, (req, res) => {
  return res.sendStatus(200);
})

module.exports = router;