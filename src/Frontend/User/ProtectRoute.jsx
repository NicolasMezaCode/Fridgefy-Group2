import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../../AuthContext'

const ProtectRoute = ({children}) => {
    const { user } = useAuthContext();
    let userExistence;
    if(user){
        userExistence = user.accessToken;
    }
    console.log(userExistence)

    if(userExistence) return <Navigate to='/'></Navigate>
  return (
    <>{children}</>
  )
}

export default ProtectRoute