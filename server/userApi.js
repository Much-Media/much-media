const express = require('express');
const path = require('path');
// const { router } = require('./server');
const userController = require('./userController')
const cookieController = require('./cookieController')

const router = express.Router();

router.post('/', userController.findUser, cookieController.setCookie, cookieController.hasCookie, (req, res) => {
  // console.log('user: ', Array.isArray(res.locals.user), res.locals.user)
  // if (res.locals.user[0] == undefined) return res.sendStatus(400);
  // console.log('Testing Inputs', res.locals.user)
  if (res.locals.user[0] == undefined) return res.status(400).json('username and/or password are incorrect');
  return res.status(200).json('login successful')
})

module.exports = router;