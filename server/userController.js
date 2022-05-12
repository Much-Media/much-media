const db = require('./model.js');
const bcrypt = require('bcrypt');
const saltRounds = 5; // make larger for added security

const userController = {};

userController.findUser = (req, res, next) => {
  const currentUser = req.body;
  // console.log('req', req);
  const findQuery =
    // `SELECT * FROM "public"."User"`;
    // `SELECT * FROM "public"."User" WHERE username = 'antonio'`
    `SELECT password FROM "public"."User" WHERE username = '${currentUser.username}'`

  // const hash = '*'
  // result == true
  db.query(findQuery)
    .then(data => {
      res.locals.user = data.rows;
      // console.log(res.locals.user)
      let hash;
      res.locals.user[0] === undefined ? hash = '*' : hash = res.locals.user[0].password
      bcrypt.compare(currentUser.password, hash, function (err, result) {
        if (result) { return next(); }
        // console.log('no');
        res.locals.skipCookie = true;
        return next()
      });
    })
    .catch(err => {
      const errorObj = {
        log: 'error in userController.findUser',
        message: `server error ${err} `
      };
      return next(errorObj);
    })
};


module.exports = userController;