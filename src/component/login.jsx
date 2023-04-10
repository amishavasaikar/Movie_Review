import React, { useState } from 'react';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to submit the registration form goes here
  };

  return (
    <nav>
    <div style={{backgroundImage: `url("https://3.bp.blogspot.com/-p1aM0cP82Fw/Vxto2SB7XNI/AAAAAAAAyXw/IFS4lYcMeXwrK-SDHbhzmq8DHktGaULdwCHM/s1600/video-backgrounds-best-background-wallpaper.jpg")`}} className="login-form">
      
      <form onSubmit={handleSubmit}>
      <h1 style={{backgroundColor:"black",color:"white"}}>LOGIN</h1>
        <label>
          <b>Email:</b>
          <input type="email" placeholder='Enter Your Email' value={email} onChange={handleEmailChange} />
        </label>
        <label>
          <b>Password:</b>
          <input type="password" placeholder='Enter Your Password' value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
    </nav>
  );
}

export default Login;
