import React, { useState, useEffect } from 'react'
import CreateMediaCard from './CreateMediaCard'
import MediaCard from './MediaCard'
import FeedElement from './FeedElement'
import { Link, Outlet } from 'react-router-dom';

export default function Home(props) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('profile')
      .then(res => res.json())
      .then(body => setReviews(body))
  })

  function handleNewReview(review) {
    setReviews([review, ...reviews]);
  }
  const mediaCards = reviews.map(el => {
    return <MediaCard review={el} />
  })

  const feedElements = reviews.map(el => {
    return <FeedElement review={el} />
  })

  return (
    <div id='reviews-container' className='container'>
      <Link to="/feed">Go to Feed</Link>
      <div className='row pt-5'>
        <CreateMediaCard handleNewReview={handleNewReview} />
        {mediaCards}
      </div>
      {feedElements}
      {/* <FeedElement /> */}
    </div>
  )
}