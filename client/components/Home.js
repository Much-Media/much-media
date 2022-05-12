import React, { useState, useEffect } from 'react'
import CreateMediaCard from './CreateMediaCard'
import MediaCard from './MediaCard'
import FeedElement from './FeedElement'
import { Link, Outlet } from 'react-router-dom';

export default function Home(props) {
  const [reviews, setReviews] = useState([]);
<<<<<<< HEAD

  useEffect(() => {
    fetch('profile')
      .then(res => res.json())
      .then(body => setReviews(body))
  })

=======

  // function checkUser() {
  //   fetch('/home', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       if (res.status === 200) {
  //         navigate('/home');
  //         res.json;
  //       } else {
  //         alert('No cookies set');
  //         throw new Error('No cookies set/not logged in');
  //       }
  //     })
  //     .then((body) => {
  //       console.log('body: ', body);

  //       navigate('/home');
  //     })
  //     .catch((err) => console.log(err));
  // }

  // useEffect(() => {
  //   fetch('profile')
  //     .then(res => res.json())
  //     .then(body => setReviews(body))
  // })

>>>>>>> dev
  function handleNewReview(review) {
    setReviews([review, ...reviews]);
  }
  const mediaCards = reviews.map(el => {
    return <MediaCard review={el} />
  })

  // const feedElements = reviews.map(el => {
  //   return <FeedElement review={el} />
  // })

<<<<<<< HEAD
=======

>>>>>>> dev
  return (
    <div id='reviews-container' className='container'>
      <Link to="/feed">Go to Feed</Link>
      <div className='row pt-5'>
        <CreateMediaCard handleNewReview={handleNewReview} />
        {mediaCards}
      </div>
      {/* {feedElements} */}
      <FeedElement />
    </div>
  )
}