import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

function Login() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation and authentication here
        console.log(credentials);
        // Add your authentication logic or API call here
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form className='w-50 m-auto mt-5 border border-success rounded' onSubmit={handleSubmit}>
                                <div className='text-center'> <img src="../../public/logo.jpeg"  alt="hello" style={{widows:"100px",height:"100px"}} />
                                <p >Welcome to TableSprint Admin</p></div>
                           
                                <div className="m-3">
                                    <label htmlFor="email" className="form-label text-dark">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        value={credentials.email}
                                        onChange={onChange}
                                        aria-describedby="emailHelp"
                                        placeholder='Enter Your email ID'
                                        required
                                    />
                                </div>
                                <div className="m-3">
                                    <label htmlFor="password" className="form-label text-dark">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={credentials.password}
                                        onChange={onChange}
                                        name='password'
                                        placeholder='Enter Your password'
                                        required
                                    />
                                    <div className='d-flex justify-content-end'><Link to='/forgotpassword' className='d-flex  mx-1'>Forgot password?</Link></div>

                                </div>
                                <div className='text-center'>
                                <button type="submit" className="btn btn-primary  " style={{ margin: '20px 0',width:"500px" ,backgroundColor:"#4c1680"}}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
