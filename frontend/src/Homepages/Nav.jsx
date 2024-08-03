import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

function Nav() {
    const [isUserExist, setIsUserExist] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the JWT token exists in local storage
        const token = localStorage.getItem('token');
        setIsUserExist(!!token);
    }, [localStorage.getItem("token")]);

    function handleProfile() {
        navigate("/logout");
    }

   

    return (
        <nav className="navbar" style={{ backgroundColor: '#4c1680' }}>
            <div className="container">
                <h2 className='text-white' onClick={() => navigate("/")}>TableSprint</h2>
                <div className="d-flex">
                    {isUserExist ? (
                        <div>
                            <i className="bi bi-person-circle mx-1 text-white h2" onClick={handleProfile}></i>
                           
                        </div>
                    ) : (
                        <div>
                            <Link className="btn text-white mx-1" to="/login">Login</Link>
                            <Link className="btn text-white mx-1" to="/signup">Signup</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Nav;
