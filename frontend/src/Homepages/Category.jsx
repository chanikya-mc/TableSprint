import React, { useState } from 'react'
import Menu from './Menu'
import { useNavigate } from 'react-router-dom'
import { ShowDelete } from './ShowDelete';
function Category() {
  const navigate = useNavigate();
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
                  <p className="d-flex align-items-center mb-0"><i className="fs-4 bi-grid me-2"></i> Category</p>
                  <input className="ms-4 form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "400px", height: "40px" }} />
                </div>
                <button onClick={() => { navigate("/addcategory") }} className="btn text-white" style={{ backgroundColor: "#4c1680", height: "40px" }}>Add Category</button>
              </form>
              <div className='mt-5'> <table className='table'>
                <tr className='bg-warning mb-2'>
                  <th>Id</th>
                  <th>CategoryName</th>
                  <th>Image</th>
                  <th>Status</th>
                  <th>Sequence</th>
                  <th>Action</th>
                </tr>
                <tr itemScope="row">
                  <td>1</td>
                  <td>Tea</td>
                  <td>image</td>
                  <td>Active</td>
                  <td>1</td>
                  <td><button className='btn' onClick={() => { navigate("/editcategory") }}><i className="bi bi-pencil-square "></i></button>
                   <button className='btn' onClick={handleDeleteClick}><i className="bi bi-trash3-fill"></i></button></td>
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

export default Category