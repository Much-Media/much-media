// server for handling subscriber/subscribee database requests
const express = require('express');
const path = require('path');
const followerController = require('./followerController')

const router = express.Router();

// routes below
router.get('/', followerController.findSubscribees, followerController.findReviews, (req, res) => {
  return res.status(200).json('Subscribees found')
})

module.exports = router;