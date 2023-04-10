import React, { useState } from 'react';
import './registration.css';

function Registration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [allEntry,setAllEntry]=useState([]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  
  const handleSubmit = (e)=>{
        
    e.preventDefault();
    if(username && email && password)
    {
        const newEntry ={username : username ,email : email ,password: password}

        setAllEntry([...allEntry,newEntry]);
        console.log(allEntry);
        setEmail("");
        setPassword("");
        setUsername("");
    }
    else{
        alert("Please Enter name,email and password");
    }
    
}
  return (
    <nav>
    <div style={{backgroundImage: `url("https://3.bp.blogspot.com/-p1aM0cP82Fw/Vxto2SB7XNI/AAAAAAAAyXw/IFS4lYcMeXwrK-SDHbhzmq8DHktGaULdwCHM/s1600/video-backgrounds-best-background-wallpaper.jpg")`}} className="registration-form"> 
      <form onSubmit={handleSubmit}>
      <h1 style={{backgroundColor:"black",color:"white"}}>REGISTER</h1>
        <label>
          <b>Name:</b>
          <input type="text" placeholder='Enter Your Name' value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          <b>Email:</b>
          <input type="email" placeholder='Enter Your Email' value={email} onChange={handleEmailChange} />
        </label>
        <label>
          <b>Password:</b>
          <input type="password" placeholder='Enter Your Password' value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit" onClick={handleSubmit}>Register</button>
      </form>
      <div>
                {
                    allEntry.map((curElement,key) =>{
                        return(
                            <div>
                                

                                    <p> You have register successfully</p>
                            
                                 
                            </div>
                        )
                    })
                }
            </div>
    </div>
    </nav>
  );
}

export default Registration;
