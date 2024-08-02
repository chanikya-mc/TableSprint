import React,{useState} from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

function SignUp() {
    const [credentials, setCredentials] = useState({ email: "", password: "" }) 
    function handleSubmit()
    {

    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
      }
  return (
    <>
   
    <div> <div className='container'>
        <form className='w-50 m-auto mt-5 border  border-success rounded' onSubmit={handleSubmit}>
          <div className="m-3">
          <div className='text-center'> <img src="../../public/logo.jpeg"  alt="hello" style={{widows:"100px",height:"100px"}} />
          <p >Welcome</p></div>
            <label htmlFor="exampleInputEmail1" className="form-label text-dark">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp" placeholder='Enter Your email ID' />
            <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone.</div>
          </div>
          <div className="m-3">
            <label htmlFor="exampleInputPassword1" className="form-label text-dark">Password</label>
            <input type="password" className="form-control" value={credentials.password} onChange={onChange} name='password' placeholder='Enter Your password'/>
          </div>
          <button type="submit" className="m-3 btn btn-success" style={{width:"500px" ,backgroundColor:"#4c1680"}}>SignUp</button>
         
        </form>

      </div></div></>
  )
}

export default SignUp