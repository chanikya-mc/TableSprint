import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Login() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [isUserExist, setIsUserExist] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsUserExist(!!token);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:5000/login', credentials)
            .then((response) => {
                if (response.data.token) {
                    localStorage.setItem('token', response.data.token);
                    setIsUserExist(true);
                    navigate('/');
                } else {
                    alert(response.data.message || 'Login failed');
                }
            })
            .catch((error) => {
                console.error("There was an error logging in!", error);
                alert('Login failed');
            });
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsUserExist(false);
        navigate("/login");
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {isUserExist ? (
                            <div className='text-center mt-5'>
                                <h1 className=''>Logged In</h1>
                                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                            </div>
                        ) : (
                            <form className='w-50 m-auto mt-5 border border-success rounded' onSubmit={handleSubmit}>
                                <div className='text-center'>
                                    <img src="../../public/logo.jpeg" alt="hello" style={{  height: "100px" }} />
                                    <p>Welcome to TableSprint Admin</p>
                                </div>
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
                                    <div className='d-flex justify-content-end'>
                                        <Link to='/forgotpassword' className='d-flex mx-1'>Forgot password?</Link>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button type="submit" className="btn btn-primary" style={{ margin: '20px 0', width: "500px", backgroundColor: "#4c1680" }}>Login</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
