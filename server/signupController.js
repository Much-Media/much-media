const db = require('./model.js');

// if (process.env.NODE_ENV === 'test') {
//   db = require('../__test__/modeltest.js');
// }

// console.log('db is......', db.query());

const bcrypt = require('bcrypt');
const saltRounds = 5; // make larger for added security

const signupController = {};

signupController.createUser = (req, res, next) => {
  const newUser = req.body;
  // console.log(newUser)
  bcrypt.hash(newUser.password, saltRounds, function (err, hash) {
    // Store hash in your password DB.
    const createQuery =
      `INSERT INTO "public"."User" ("username", "password")
      VALUES ('${newUser.username}', '${hash}')`;
    db.query(createQuery)
      .then(data => {
        res.locals.user = data.rows;
        // console.log(res.locals.user);
        return next();
      })
      .catch(err => {
        const errorObj = {
          log: 'error in signupController.createUser',
          message: `server error ${err}`
        };
        return next(errorObj);
      })
  });

};

module.exports = signupController;
