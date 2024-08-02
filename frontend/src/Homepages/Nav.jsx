import React,{useState} from 'react';
import { Link, useNavigate } from "react-router-dom";

function Nav() {
    const [isuserexit,setIsUserExist]=useState(true);
    const navigate=useNavigate()
    function profilehandle()
    {
        navigate("/logout")
    }
    return (
        <nav className="navbar " style={{ backgroundColor: '#4c1680' }}>
            <div className="container">
                <h2 className='text-white' onClick={()=>{navigate("/")}}>TableSprint</h2>
                <div className="d-flex">
                    {isuserexit?<div><i className=" bi bi-person-circle mx-1 text-white h2 " onClick={profilehandle}></i></div>:<div >
                                <Link className="btn  text-white mx-1 " to="/login">Login</Link>
                                <Link className="btn  text-white mx-1 " to="/signup">Signup</Link>
                </div>}
                
                </div>
            </div>
        </nav>
    );
}

export default Nav;
