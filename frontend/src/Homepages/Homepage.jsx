import React, { useState } from 'react'
import Nav from './Nav'
import Menu from './Menu'

function Homepage() 
{
    const [isuserexit,setIsUserExist]=useState(true)
    return (
        <>
          {isuserexit && (
                <div style={{ display: "flex", height: "100vh" }}>
                    <div style={{ flex: "0 0 auto" }}>
                        <Menu />
                    </div>
                    <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <div style={{ textAlign: "center" }}>
                            <img src="../../public/logo.jpeg" alt="Logo" style={{  height: "100px" }} />
                            <p>Welcome to TableSprint</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Homepage