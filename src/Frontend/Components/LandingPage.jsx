import React from 'react'
import { auth } from '../../firebaseConfig'
import { useLocation, Navigate } from 'react-router-dom'
import { useAuthContext } from '../../AuthContext'

export const LandingPage = () => {
    const history = useLocation();
    const { user } = useAuthContext();
    console.log(user)
    const handleSignOut = () =>{
        auth.signOut();
        // history.push('/signin')
    };

    if(!user){
        return <Navigate to='/signin'></Navigate>
    }else{
        return(
            <>
                <h2>Welcome !!{user.displayName === null && 'User'}</h2>
                <button onClick={handleSignOut}>Sign Out</button>
            </>
        )
    }
}

