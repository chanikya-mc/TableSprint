import React, { useState } from 'react';
import Menu from './Menu';
import './addcategory.css';
import { useNavigate } from 'react-router-dom';

function ProductView() {
  const navigate = useNavigate();
  const [isUserExist, setIsUserExist] = useState(true);

  return (
    <>
      {isUserExist && (
        <div style={{ display: 'flex', height: '100vh' }}>
          <div style={{ flex: '0 0 auto' }}>
            <Menu />
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '10px' }}>
            <h4>
              <i className="bi bi-arrow-left-circle h4" onClick={() => navigate('/products')}></i> Products Details
            </h4>
            <table className='table'>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Subcategory</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {/* Add your table rows here */}
              </tbody>
            </table>
          </div>

          {/* Cancel and confirm button */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              display: 'flex',
              gap: '10px',
            }}
          >
            <button className="btn border rounded" style={{ height: '40px', width: '100px' }}>Cancel</button>
            <button className="btn text-white border rounded" style={{ backgroundColor: '#4c1680', height: '40px', width: '100px' }}>Save</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductView;
