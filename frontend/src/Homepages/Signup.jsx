import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function SignUp() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });

    function handleSubmit(e) {
        e.preventDefault();
        Axios.post('http://localhost:5000/signup', credentials)
            .then((response) => {
                console.log(response);
                alert('User registered successfully');
                setCredentials({ email: "", password: "" });
            })
            .catch((error) => {
                console.error('There was an error!', error);
                alert('Error registering user');
            });
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div>
                <div className='container'>
                    <form className='w-50 m-auto mt-5 border border-success rounded' onSubmit={handleSubmit}>
                        <div className="m-3">
                            <div className='text-center'>
                                <img src="/logo.jpeg" alt="logo" style={{  height: "100px" }} />
                                <p>Welcome</p>
                            </div>
                            <label htmlFor="exampleInputEmail1" className="form-label text-dark">Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                name='email'
                                value={credentials.email}
                                onChange={onChange}
                                aria-describedby="emailHelp"
                                placeholder='Enter Your email ID'
                                required
                            />
                        </div>
                        <div className="m-3">
                            <label htmlFor="exampleInputPassword1" className="form-label text-dark">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name='password'
                                value={credentials.password}
                                onChange={onChange}
                                placeholder='Enter Your password'
                                required
                            />
                        </div>
                        <button type="submit" className="m-3 btn btn-success" style={{ width: "500px", backgroundColor: "#4c1680" }}>SignUp</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;
