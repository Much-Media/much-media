const fs = require('fs');
const path = require('path');
const supertest = require('supertest');
const signupController = require('../server/signupController')

const testdb = require('./modeltest.js');

// Things to test
// if user is created
// if bcrypt is working - password is hashed
// if review is created
// if a media is created
// if review is connected to a media


xdescribe('db unit tests', () => {
  // delete everything from database from each test
  // beforeAll((done) => {
  //   // create query
  //   //
  // });
  xdescribe("testing sql database", () => {
    it("tests if a user is created", async () => {



    });
  });
})