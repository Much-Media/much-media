<<<<<<< HEAD
import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
// import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
// import userEvent from '@testing-library/user-event';
// import regeneratorRuntime from 'regenerator-runtime';
import MediaCard from '../client/components/MediaCard'

describe('testing elements', () => {
  const props = {
    review: {
      title: 'Title',
      type: 'Type',
      review: 'Review'
    }
  };

  const server = setupServer(
    rest.get('/media', (req, res, next) => {
      return res(next.json())
    }),
  )

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('Checking if media card renders information', () => {
    const mediaCard = render(<MediaCard {...props} />);
    const propVals = Object.values(props);
    propVals.map(el => expect(mediaCard.getByText(el.review))//.toBeInstanceOf(Node));
    )
=======
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
>>>>>>> dev
  });
})