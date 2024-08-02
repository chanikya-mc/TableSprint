import React, { useState } from 'react'
import Menu from './Menu'
import "./addcategory.css"
import { useNavigate } from 'react-router-dom'
function SubAddCategory() {
  const navigate = useNavigate()
  const [isuserexit, setIsUserExist] = useState(true)
  return (
    <>
      {isuserexit && (
        <div style={{ display: "flex", height: "100vh" }}>
          <div style={{ flex: "0 0 auto" }}>
            <Menu />
          </div>
          <div><h4><i className="  bi bi-arrow-left-circle h4" onClick={() => { navigate("/subcategory") }}></i> Add to SubCategory</h4>
            <form className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">

                <div className="form-group position-relative me-5">
                  <input type="text" id="name" name="name" className="form-control custom-input" placeholder=" " />
                  <label htmlFor="name" className="custom-label">Category Name</label>
                </div>
                <div className="form-group position-relative me-5">
                  <input type="text" id="name" name="name" className="form-control custom-input" placeholder=" " />
                  <label htmlFor="name" className="custom-label">Sub Category Name</label>
                </div>
                <div className="form-group position-relative ms-5">
                  <input type="number" id="name" name="name" className="form-control custom-input" placeholder=" " />
                  <label htmlFor="name" className="custom-label">Sub Category Sequence</label>
                </div>
              </div>

            </form>
            <div>
              <div className="form-group position-relative mt-5">
                <input type="file" id="file" name="file" className="form-control custom-input" placeholder=" " style={{ width: "300px", height: "50px" }} />
                <label htmlFor="file" className="custom-label">Upload Image</label>
              </div>
            </div>


          </div>

          {/* cqncel and confoem button */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              display: 'flex',
              gap: '10px'
            }}
          >
            <button className="btn border rounded" style={{ height: '40px', width: '100px' }}>Cancel</button>
            <button className="btn text-white border rounded" style={{ backgroundColor: '#4c1680', height: '40px', width: '100px' }}>Save</button>
          </div>

        </div>
      )}



    </>
  )
}

export default SubAddCategory