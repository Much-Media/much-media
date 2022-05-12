import React from 'react';
import FeedElement from './FeedElement';
import { useNavigate } from 'react-router-dom';

export default function Feed(props) {
  const navigate = useNavigate();
  navigate('/feed');


  return (
    <div className="feedDisplay">
      <FeedElement style={{ height: 50 }} />
      <FeedElement style={{ height: 50 }} />
      <FeedElement style={{ height: 50 }} />
      <FeedElement style={{ height: 50 }} />
      <FeedElement style={{ height: 50 }} />
      <FeedElement style={{ height: 50 }} />
      <FeedElement style={{ height: 50 }} />
      <FeedElement style={{ height: 50 }} />
    </div>
  )
}
