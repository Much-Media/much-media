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
  });
})