const db = require('./model.js');

const cookieController = {};

cookieController.setCookie = (req, res, next) => {
  if (res.locals.skipCookie === true) return next()
  // console.log('req.cookies: ', req.cookies)
  // create random alphanumeric for cookie (for fun)
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = ""
  const charactersLength = characters.length;

  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  res.cookie('secret cookie', result, { httpOnly: true })
  return next()
}

cookieController.hasCookie = (req, res, next) => {
  if (res.locals.skipCookie === true) return next()
  // if (!req.headers.cookie) return res.redirect('login')
  console.log('cookies: ', req.headers.cookie)
  return next()
}

module.exports = cookieController;