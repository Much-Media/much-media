import React from 'react'

// Feed elements
// contain: media type, username, media title, reccomend, review
// pulling from /media (review table)
// check how response body looks
// assign different attributes appropriately
// make it look pretty

export default function FeedElement(props) {
  /*
    async function getData() {
      const response = await fetch('/media');
      const data = await response.json();
      console.log(data)
      const {
        id = data[1]['_id'],
        username = data[1]['username'],
        // mediaType = data[1]['email'],
        // mediaTitle = data[1]['username'],
        // reccomend = data[1]['address'],
        // review = data[1]['address']
      } = data
    }
  */
  /*
  fetch('/media', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        // navigate('/home');
        alert('Getting feed info');
        res.json;
      } else {
        throw new Error('Error with getting feed info');
      }
    })
    .then((body) => {
      console.log('body: ', body);

      // navigate('/home');
    })
    .catch((err) => console.log(err));
    */

  // console.log(props)
  // let rating;
  // if (props.review.rating === 1) {
  //   rating = <p className="btn card-rating btn-success fs-4" style={{ width: '10em', height: '3em' }}>alotl</p>
  // } else {
  //   rating = <p className="btn card-rating btn-danger fs-4" style={{ width: '10em', height: '3em' }}>not alotl</p>
  // }
  // console.log('getting to rendering feed element')
  return (
    <div className='feed' style={{ width: '75rem', height: '15em' }}>
      <div className='feed-rows'>
        <span className='media-type'>Media Type: ""   -   </span>
        {/* <img className="card-img-top" src="" alt="Card image cap"></img> */}
        <span className='username'>Username: ""   -   </span>
        <span className='media-title'>Title: ""   -   </span>
        <span className='recommend'>Recommend: ""</span>
        <div className='review' style={{height: '7em'}}>Review: ""</div>
        {/* <span className='media-type'>Media Type: "{props.review.type}"   -   </span>
        {/* <img className="card-img-top" src="" alt="Card image cap"></img> */}
        {/* <span className='username'>Username: ""   -   </span>
        <span className='media-title'>Title: "{props.review.title}"   -   </span>
        <span className='reccommend'>Recommend: "{rating}"</span>
        <div className='review'>Review: "{props.review.review}"</div> */}
      </div>
    </div>
    // <div className='col-auto h-100 '>
    //   <div className="card" style={{ width: '50rem', height: '18em' }}>
    //     {/* <img className="card-img-top" src="" alt="Card image cap"></img> */}
    //     <div className="card-body d-flex flex-column justify-content-start align-items-center">
    //       {/* <h3 className="card-title">{props.review.title}</h3>
    //       <h6 className="card-type">type: {props.review.type}</h6>
    //       <p className="card-text">{props.review.review}</p> */}
    //       <h3 className="card-title">Title</h3>
    //       <h6 className="card-type">type: Book</h6>
    //       <p className="card-text">Review</p>
    //       <p>I recommend this </p>
    //       1
    //       {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    //     </div>
    //   </div>
    // </div>
  )
}