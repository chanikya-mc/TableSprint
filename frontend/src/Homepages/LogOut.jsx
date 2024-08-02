import React from 'react'

function LogOut() {
  return (
    <>
    <div className="container">
        <div className='row'>
            <div className='col-12'>
                <div className='card w-50 m-auto mt-5 border  rounded'>
                    <div className='text-center'>
                    
                        <h1 className=''><i className="bi bi-exclamation-triangle h1 text-danger"></i>  Log Out</h1>
                        <p>Are you sure you want to logout ?</p>
                        </div>
                        <div className='text-center mb-3'><button className='btn border me-5'>Delete</button>
                        <button className='btn btn-danger border'>Conform</button></div>
                 
                       
            
                </div>
            </div>
        </div>

    </div>
    
    
    </>
  )
}

export default LogOut