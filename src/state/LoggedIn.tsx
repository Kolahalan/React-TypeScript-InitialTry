import React, { useState } from 'react'



export const LoggedIn = () => {
const [isLoggedIn, setisLoggedIn] = useState(false)
    const handleLogin = () => {
        setisLoggedIn(true)
    }
const handleLogout = () => { 
    setisLoggedIn(false)}

    return (
<>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div>User is {isLoggedIn?" Logged in" : " Logged Out "}</div>
  </>
        )
}
