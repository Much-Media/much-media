import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import 'bootstrap';
import App from './components/App';
import Login from './components/Login';
import Home from './components/Home';
import Feed from './components/Feed';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// ReactDOM.render(
//     <h1>Hello World</h1>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="feed" element={<Feed />} />
      </Route>
    </Routes>
  </BrowserRouter>
);