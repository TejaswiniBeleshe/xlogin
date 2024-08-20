import React, { useState } from 'react';
import './App.css';

function App() {
  const [ipName,setIpName] = useState('');
  const [ipPassword,setIpPassword] = useState('');
  const [check,setCheck] = useState('');

  const handleSubmit = (e)=>{
    console.log(e.target.value);
    e.preventDefault();
    if(ipName === "user" && ipPassword === "password"){
      setCheck(true);
    }else{
      setCheck(false);
    }
    setIpName('');
    setIpPassword('');
  }

  return (
    <div className="App">
        <h1>Login Page</h1>
        {check===true && <p>Welcome, user!</p>}
        {check===false && <p>Invalid username or password</p> }
        {!check &&
        <form onSubmit={(e)=>handleSubmit(e)}>
          <label>Username:<input type="text" placeholder="username" value={ipName} onChange={(e)=>setIpName(e.target.value)} required/></label><br/>
          <label>Password:<input type="password" placeholder="password" value={ipPassword} onChange={(e)=>setIpPassword(e.target.value)} required/></label><br/>
          <button type="submit">Submit</button>
        </form>}
    </div>
  );
}

export default App;
