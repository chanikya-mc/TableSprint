import React, { useState,useEffect } from 'react'
import Menu from './Menu'
import { useNavigate } from 'react-router-dom'
import { ShowDelete } from './ShowDelete';
function SubCategory() {
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
                  <p className="d-flex align-items-center mb-0"><i className="fs-4 bi-grid me-2"></i>Sub Category</p>
                  <input className="ms-4 form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "400px", height: "40px" }} />
                </div>
                <button onClick={()=>{navigate("/addsubcategory")}} className="btn text-white" style={{ backgroundColor: "#4c1680", height: "40px" }}>Add SubCategory</button>
              </form>
              <div className='mt-5'> <table className='table'>
                <tr className='bg-warning mb-2'>
                  <th>Id</th>
                  <th> Sub CategoryName</th>
                  <th>CategoryName</th>
                  <th>Image</th>
                  <th>Status</th>
                  <th>Sequence</th>
                  <th>Action</th>
                </tr>
                <tr itemScope="row " >
                  <td>201</td>
                  <td>green tea</td>
                  <td>tea</td>
                  <td><img style={{width:"60px",height:"60px"}} src="https://www.teaforturmeric.com/wp-content/uploads/2021/11/Masala-Chai-Tea-Recipe-Card.jpg" alt="" /></td>
                
                  <td>Active</td>
                  <td>1</td>
                  <td><button className='btn' onClick={()=>{navigate("/editsubcategory")}}><i className="bi bi-pencil-square "></i></button>
                   <button className='btn' onClick={handleDeleteClick}><i className="bi bi-trash3-fill"></i></button></td>
                </tr>
                <tr itemScope="row " >
                  <td>211</td>
                  <td>Toor daal</td>
                  <td>dall</td>
                  <td><img style={{width:"60px",height:"60px"}} src="https://www.healthyorganic.in/cdn/shop/products/organic-toor-dal-500x500_837491a8-755b-4548-b082-42c110c406aa_grande.jpg?v=1552055341" alt="" /></td>
                
                  <td>Active</td>
                  <td>1</td>
                  <td><button className='btn' onClick={()=>{navigate("/editsubcategory")}}><i className="bi bi-pencil-square "></i></button>
                   <button className='btn' onClick={handleDeleteClick}><i className="bi bi-trash3-fill"></i></button></td>
                </tr>
                <tr itemScope="row " >
                  <td>100</td>
                  <td>Fortune</td>
                  <td>Ghee & Oil</td>
                  <td><img style={{width:"60px",height:"60px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNnwNkRT-FzaQqNOqdGuVgW2fHMhEMaui-Q&s" alt="" /></td>
                
                  <td>inActive</td>
                  <td>10</td>
                  <td><button className='btn' onClick={()=>{navigate("/editsubcategory")}}><i className="bi bi-pencil-square "></i></button>
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

export default SubCategory