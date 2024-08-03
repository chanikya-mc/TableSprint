import React, { useState,useEffect } from 'react'
import Menu from './Menu'
import { useNavigate } from 'react-router-dom'
import { ShowDelete } from './ShowDelete';
function Products() {
  const navigate=useNavigate();
  const handleDeleteClick = () => {
    ShowDelete(
      "Are you sure you want to delete this item?",
      () => {
        // Add your delete logic here
        console.log('Item deleted');
      },
      () => {
        console.log('Delete cancelled');
      }
    );
  };

  const [isuserexit, setIsUserExist] = useState(true)
  useEffect(() => {
    // Check if the JWT token exists in local storage
    const token = localStorage.getItem('token');
    if(token)
    setIsUserExist(!!token);
  else
  {
  setIsUserExist(false);
  navigate("/login")
  }
}, [localStorage.getItem("token")]);
  return (
    <>
      {isuserexit && (
        <div style={{ display: "flex", height: "100vh" }}>
          <div style={{ flex: "0 0 auto" }}>
            <Menu />
          </div>
          <div style={{ flex: 1, display: "flex", }}>
            {/* seach bar for the catogeroy */}
            <div className="container-fluid mt-5">
              <form className="d-flex align-items-center justify-content-between" role="search">
                <div className="d-flex align-items-center">
                  <p className="d-flex align-items-center mb-0"><i className=" bi bi-box-seam me-2"></i> Products</p>
                  <input className="ms-4 form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "400px", height: "40px" }} />
                </div>
                <button onClick={()=>{navigate("/addproducts")}} className="btn text-white" style={{ backgroundColor: "#4c1680", height: "40px" }}>Add Products</button>
              </form>
              <div className='mt-5'> <table className='table'>
                <tr className='bg-warning mb-2'>
                  <th>Id</th>
                  <th>ProductName</th>
                  <th>Sub Category</th>
                  <th>Category</th>
                  <th>Status</th>
                  
                  <th>Action</th>
                </tr>
                <tr itemScope="row">
                  <td>112</td>
                  <td>green Tea powder</td>
                  <td> green tea</td>
                  <td>tea</td>
                  <td>Active</td>
                 
                  <td><button className='btn ' onClick={()=>{navigate("/productView")}}><i className="bi bi-eye"></i></button><button className='btn' onClick={()=>{navigate("/editproduct")}}><i className="bi bi-pencil-square "></i></button>
                   <button className='btn' onClick={handleDeleteClick}><i className="bi bi-trash3-fill"></i></button> </td>
                </tr>
                <tr itemScope="row">
                  <td>102</td>
                  <td>fortune sunflower oil</td>
                  <td> fortuen</td>
                  <td>Ghee & Oil</td>
                  <td>Active</td>
                 
                  <td><button className='btn ' onClick={()=>{navigate("/productView")}}><i className="bi bi-eye"></i></button><button className='btn' onClick={()=>{navigate("/editproduct")}}><i className="bi bi-pencil-square "></i></button>
                   <button className='btn' onClick={handleDeleteClick}><i className="bi bi-trash3-fill"></i></button> </td>
                </tr>
                <tr itemScope="row">
                  <td>182</td>
                  <td>fortune vegitable oil</td>
                  <td> fortuen</td>
                  <td>Ghee & Oil</td>
                  <td>Active</td>
                 
                  <td><button className='btn ' onClick={()=>{navigate("/productView")}}><i className="bi bi-eye"></i></button><button className='btn' onClick={()=>{navigate("/editproduct")}}><i className="bi bi-pencil-square "></i></button>
                   <button className='btn' onClick={handleDeleteClick}><i className="bi bi-trash3-fill"></i></button> </td>
                </tr>
                <tr itemScope="row">
                  <td>102</td>
                  <td>fortune groundnu oil</td>
                  <td> fortuen</td>
                  <td>Ghee & Oil</td>
                  <td>Active</td>
                 
                  <td><button className='btn ' onClick={()=>{navigate("/productView")}}><i className="bi bi-eye"></i></button><button className='btn' onClick={()=>{navigate("/editproduct")}}><i className="bi bi-pencil-square "></i></button>
                   <button className='btn' onClick={handleDeleteClick}><i className="bi bi-trash3-fill"></i></button> </td>
                </tr>

              </table></div>
              {/* for table display */}

            </div>





          </div>

        </div>
      )}
    </>
  )
}

export default Products