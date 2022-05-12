const fs = require('fs');
const path = require('path');
const supertest = require('supertest');
const signupController = require('../server/signupController')
// const rest = require('msw')
// const setupServer = require('msw/node')

// const testdb = require('./modeltest.js');

// Things to test
// if user is created
// if bcrypt is working - password is hashed
// if review is created
// if a media is created
// if review is connected to a media

// const server = setupServer(
//   rest.post('/media', (req, res, next) => {
//     return res(next.json())
//   }),
// )

// beforeAll(() => server.listen())
// afterEach(() => server.resetHandlers())
// afterAll(() => server.close())


describe('db unit tests', () => {

  // before all tests, make a req body and res locals object
  

  test('signs up a user', () => {
      const mockReq = () => {
        const req = {
          body: {
            "username": "pizza",
            "password": "pizza"
          }
        };
        return req;
      }
      const mockRes = () => {
        const res = {};
        res.status = 200;
        // res.json = jest.fn().mockReturnValue(res);
        return res;
      };
  
      const mockNext = () => {
        // console.log(response, request)
        const next = jest.fn()
        // res.json = jest.fn().mockReturnValue(res);
        return next;
      };
  
      // req.body = {
      //   "username": "bunnies",
      //   "password": "bunnies"
      // }
      // res.locals = {};

    const result = signupController.createUser(mockReq(), mockRes(), mockNext())
    console.log('result', result)
    // expect(result).to
    expect(mockNext).toHaveBeenCalled();
  })

  // xdescribe("testing sql database", () => {
  //   it("tests if a user is created", async () => {
  //   // actually query the db with signup middleware
  //   });
  // });
})