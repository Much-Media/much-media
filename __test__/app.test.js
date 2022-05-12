const fs = require('fs');
const path = require('path');

const testdb = require('./modeltest.js');

const request = require('supertest');
const app = require('../server/server');

// Things to test
// if user is created
// if bcrypt is working - password is hashed
// if review is created
// if a media is created
// if review is connected to a media

// describe('any route', function () {
//   request(app)
//     .get('/home')
//     .expect('Content-Type', /json/)
//     // .expect('Content-Length', '4')
//     .expect(200, "ok")
//     // .expect(app.response.status).toBe(200)
//     .end(function (err, res) {
//       if (err) throw err;
//     });
// });


xdescribe('app unit tests', () => {
  // const { server } = require('../public/bundle');
  // afterAll(async () => {
  //   server.close();
  // });

  describe("test if server is running", () => {
    it("tests the base route and returns true for status", async () => {

      // request(app)
      //   .get('/home')
      //   .expect('Content-Type', "text/html; charset=UTF-8")
      //   // .expect('Content-Length', '4')
      //   .expect(200)
      //   // .expect(app.response.status).toBe(200)
      //   .end(function (err, res) {
      //     if (err) throw err;
      //   });

      const response = await request(app).get('/home');
      // console.log(response)


      // const response = await supertest(app).get('/home');

      expect(response.status).toBe(200);

    });
  });
})