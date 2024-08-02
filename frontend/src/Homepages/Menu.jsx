import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 ">
                        <div className=" mt-1 d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 " style={{backgroundColor:"#d9d9d9",width:"200px"}}>

                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <Link to="/" className='text-dark btn'> <i className="fs-4 bi-house"></i> Dashboard <i className=" mx-1 bi bi-caret-right-fill"></i></Link></li>
                                <li className='nav-item'><Link to="/category" className='text-dark btn'><i className="fs-4 bi-grid"></i> Category <i className=" ms-3 bi bi-caret-right-fill"></i></Link></li>
                                <li className='nav-item'><Link to="/subcategory" className='text-dark btn'><i className="bi bi-menu-button-wide"></i> SubCategory <i className="bi bi-caret-right-fill"></i></Link></li>
                                <li className='nav-item'><Link to="/products" className='text-dark btn'><i className=" bi bi-box-seam"></i> Products <i className="ms-4 bi bi-caret-right-fill"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* <div style={{textAlign:"center",marginTop:"180px"}}>
                <img src="../../public/logo.jpeg" alt="hello" style={{widows:"100px",height:"100px"}} />
            <p className=''>Welcome to TableSprint</p></div> */}

                </div>
            </div>

        </>
    )
}

export default Menu