import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // console.log('test', username);
  // console.log('password', password);

  function handleChangeUser(e) {
    const { value } = e.target;
    setUsername(value);
  }

  function handleChangePass(e) {
    const { value } = e.target;
    setPassword(value);
  }

  function handleLogin() {
    //send fetch req to /login
    //check if status equal to 200, then redirect to the homepage
    //otherwise, catch error alert invalid username or password

    // let navigate = useNavigate();
    // const routeChange = () =>{
    //   let path = `newPath`;
    //   navigate(path);
    // }

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate('/home');
          res.json;
        } else {
          alert('Wrong Username/Password Combo');
          throw new Error('Wrong Username/Password Combo');
        }
      })
      .then((body) => {
        // console.log('body: ', body);

        navigate('/home');
      })
      .catch((err) => console.log(err));
  }

  function handleSignup() {
    alert('SIGNUP testing');
  }

  return (
    <div className="high">
      <div
        className="login"
        style={{
          textAlign: 'center',
        }}
      >
        <h1 className="loginText">alotl</h1>
        <img
          style={{ width: '50%', height: '50%' }}
          src={
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b24336a0-4b53-4098-8e93-876674bc23c2/depn9bu-dae92a33-b9b7-4bef-ac48-0ae2a397a285.png/v1/fill/w_724,h_500,q_80,strp/axolotl__simple_background__by_thefruitwitch_depn9bu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTAwIiwicGF0aCI6IlwvZlwvYjI0MzM2YTAtNGI1My00MDk4LThlOTMtODc2Njc0YmMyM2MyXC9kZXBuOWJ1LWRhZTkyYTMzLWI5YjctNGJlZi1hYzQ4LTBhZTJhMzk3YTI4NS5wbmciLCJ3aWR0aCI6Ijw9NzI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.y5gkHTDkrgqJXejvocHn1DRGvLMg9uZ9TAlhqDFwU3s'
          }
        />
        <h2 className="loginText">Login</h2>

        <div id="login-container" className="container">
          <div className="row justify-content-md-center">
            <input
              className="col-2 mb-3 "
              value={username}
              onChange={handleChangeUser}
              placeholder="Username"
            ></input>
          </div>

          <div className="row justify-content-md-center">
            <input
              className="col-2 mb-3 "
              type="password"
              value={password}
              onChange={handleChangePass}
              placeholder="Password"
            ></input>
          </div>

          <div className="row justify-content-md-center mb-3">
            <div className="col-1">
              <button
                onClick={handleLogin}
                type="button"
                className="btn btn-danger"
              >
                Login
              </button>
            </div>
            <div className="col-1">
              <button
                onClick={handleSignup}
                type="button"
                className="btn btn-primary"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
