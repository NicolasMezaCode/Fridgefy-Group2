import React from 'react'
import { auth } from '../../Backend/firebase_config'
import { useLocation, Navigate } from 'react-router-dom'
import { useAuthContext } from '../../AuthContext'
import { recipeRef, ingredientsRef, recipeQuerySnapShot } from '../../Backend/FirebaseUtils'
import Main from "./Main"

export const LandingPage = () => {
    const history = useLocation();
    const { user } = useAuthContext();
    console.log(user)
    console.log(recipeRef)
    recipeQuerySnapShot()
    const handleSignOut = () =>{
        auth.signOut();
    };

    if(!user){
        return <Navigate to='/signin'></Navigate>
    }else{
        return(
            <>
                <h2>Welcome !!{user.displayName === null && 'User'}</h2>
                <button onClick={handleSignOut}>Sign Out</button>
                <Main/>
            </>
        )
    }
}

