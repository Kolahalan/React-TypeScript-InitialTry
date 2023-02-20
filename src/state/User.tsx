import React, {useState} from 'react'

type AuthUser = {
    name: string
    email: string
}

export const User = () => {


const [user, setUser] = useState<null | AuthUser>(null) //If we dont want to assign null 
//we can also use TypoeAssertion as useState<AuthUser>({} as AuthUser)
//The above cmd tells the compiler that the empty object is of type AuthUser

//This will avoid the initial confusions which we had during the Jobster project.
//ie Object trying to be accessed before being initialized



    const handleLogin = () => {  
        setUser({
            name: "Kolahalan",
            email: "kolahalan@mail.com",
        })
      }
const handleLogout = () => { 
    setUser(null)
}
    return (
<>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        <div> User namae is  {user?.name}               </div>
        <div> User email is {user?.email}</div>
 </>
        )
    }
