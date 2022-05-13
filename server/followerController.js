// middleware for accessing subscriber/subscribee data
const db = require('./model.js');

const followerController = {};

// 1. user follows another user
// 2. user unfollows a user
// 3. sidebar displays a list of the users you follow
// 4. sidebar displays a list of users who follow you
// 5. feed displays reviews of everyone a user follows

// 1.
// SQL query to Following table to check if subscriber already follows subscribee
// If so, set a res.locals.alreadyFollows to equal true

// Check if res.locals.alreadyFollows is true. If so, next()
// If res.locals.already follows is false, SQL query to add row to Following table

// 5. 
followerController.findSubscribees = (req, res, next) => {
  // hard code userID = 1 for now
  // const { userID } = req.body;
  const userID = 23;
  // SQL query to Following table to retrieve all users that a given user is subscribed to. Store subscribees in an array or object
  const query = `SELECT subscribee FROM "public"."Following" WHERE subscriber = '${userID}'`

  db.query(query)
    .then(data => {
      res.locals.subs = data.rows.map((el) => {
        return el.subscribee;
      })
      console.log(res.locals.subs);
      return next();
    })
    .catch(err => {
      const errorObj = {
        log: 'error in followerController.findSubscribees',
        message: `server error ${err} `
      };
      return next(errorObj);
    })
};

followerController.findReviews = (req, res, next) => {
    // SQL query to reviews table to retrieve all reviews made by all subscribees. Sort by most to least recently reviewed (media_id descending).
    // Store each review in an array or object
    // declare array of objects on res.locals. Will be eventually returned to frontend
    // res.locals.feedReviews = [];
    // iterate over res.locals.subs
        // on each element, query db for reviews
        // each review  [ { username, type, title, rating, review, }, 
      
      let subIds = '"public"."User"._id = ' + res.locals.subs[0];
      for (let i = 1; i < res.locals.subs.length; i++) {
        subIds = subIds + ' or "public"."User"._id = ' + res.locals.subs[i];
      }
     
    //   console.log(subIds);

    //   const query = `SELECT user_id, media_id, review, rating FROM "public"."reviews" WHERE ${subIds}`
      const query =
      `SELECT "public"."reviews".user_id, "public"."reviews".media_id, "public"."reviews".review, "public"."Media".type, "public"."Media".title, "public"."User".username
      FROM "public"."User"
      JOIN "public"."reviews"
      ON "public"."User"._id = "public"."reviews".user_id
      JOIN "public"."Media"
      ON "public"."reviews".media_id = "public"."Media"._id
      WHERE ${subIds};`

      db.query(query)
        .then(data => {
        // console.log(data.rows); 
        res.locals.feedReviews = data.rows;
        console.log('feedReviews:', res.locals.feedReviews);
        //   res.locals.subs = data.rows.map((el) => {
        //     return el.subscribee;
        //   })
          return next();
        })
        .catch(err => {
          const errorObj = {
            log: 'error in followerController.findReviews',
            message: `server error ${err} `
          };
          return next(errorObj);
        })


    // save foreign key media_id so that we can use it to query media table
}

followerController.findMediaInfo = (req, res, next) => {
  
      // each review  [ { username, type, title, rating, review, }, 
}

followerController.findUserInfo = (req, res, next) => {
  
  // each review  [ { username, type, title, rating, review, }, 
}

// user: username (.subs)
// reviews: review, rating (.subs)
// media: type, title (media_id) 

module.exports = followerController;