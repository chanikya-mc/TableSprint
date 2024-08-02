import React from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
    function EmailIdhandle()
    {

    }
  return (
    <>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form className='w-50 m-auto mt-5 border border-success rounded'>
                                <h4 className='text-center mb-3 ' style={{color:"#4c1680"}}>Did you forget Password</h4>
                                <p className='text-center'>Enter your Email address we will send you a link to reset password</p>
                                <div className="m-3">
                                    <label htmlFor="email" className="form-label text-dark">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        
                                        onChange={EmailIdhandle}
                                        aria-describedby="emailHelp"
                                        placeholder='Enter Your email ID'
                                        required
                                    />
                                </div>
                               
                                <div className='text-center'>
                                    <button type="submit" className="btn btn-primary  " style={{ margin: '20px 0',width:"500px" ,backgroundColor:"#4c1680"}}>Request reset Link</button>
                                    <p className='text-center text-white'><Link to="/login" className='text-dark'>back to login</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default ForgotPassword