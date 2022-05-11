const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const userApiRouter = require('./userApi.js');
const mediaApiRouter = require('./mediaApi.js');
const signupApiRouter = require('./signupApi.js');

const webpack = require('webpack');
const config = require('../webpack.config');
const compiler = webpack(config);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

// app.get('/client', (req, res) => {
//   console.log('made get request');
//   res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
// });

app.use('/login', userApiRouter);

app.use('/signup', signupApiRouter);

app.use('/media', mediaApiRouter);

app.get('/home', (req, res) => {
  console.log('made get html request');
  res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.get('/bundle.js', (req, res) => {
  console.log('made get bundle request');
  res.status(200).sendFile(path.resolve(__dirname, '../public/bundle.js'));
});

app.get('/', (req, res) => {
  console.log('made get html request');
  res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});



module.exports = app;