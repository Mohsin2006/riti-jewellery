import React, { useState } from 'react'
import "./Account.css"
const Account = () => {
  const [status,setStatus]=useState(false)
  const [current,setCurrent]=useState("login")
  return (
    <div className='loginsignup d-flex flex-column justify-content-center align-items-center '>
      <h1>{current==="login"?"Login":"Signup"}</h1>
      <form className=''>
        {
          current==="login"?<></>
          :<div className="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input type="name" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
        </div>
        }
      
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" required className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  {
    current==="login"?<></>
    :<div className="form-group">
    <label for="exampleInputPassword1">Confirm Password</label>
    <input type="password" required className="form-control" id="exampleInputPassword1" placeholder="Confirm Password"/>
  </div>
  }
  
  <div className="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button  type="submit" className="mb-5 mt-5 btn btn-primary">{current==="login"?"Login":"Signup"}</button>
  {
  current==="login"?<a onClick={()=>setCurrent(false)}>Dont have an acount then please Sign In firstly</a>:<a onClick={()=>setCurrent("login")}> Have an account then Login</a>
}
</form>

    </div>
    
  )
}

export default Account
