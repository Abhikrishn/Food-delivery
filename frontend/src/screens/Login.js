import React from 'react'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Login = () => {
  const [credentials, setcredentials] = useState({ email: "", password: "", })
  let Navigate =useNavigate()
  const onChange = (event) => {
    setcredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/Loginuser", {
      method: 'POST',
      body: JSON.stringify({ email: credentials.email, password: credentials.password, }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials")
    }
    if(json.success){
      localStorage.setItem("userEmail",credentials.email);
      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"))
      Navigate("/")
    }
  }

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit} >

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
          </div>



          <button type="submit" className=" m-3 btn btn-success">Submit</button>
          <Link to="/signup" className='m-3 btn btn-danger'>I'm New User</Link>
        </form>
      </div>
    </>

  )
}

export default Login