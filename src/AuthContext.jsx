import React, { createContext, useState, useContext, useEffect } from 'react'
import { auth } from './firebaseConfig';

const AuthContext = createContext();

export const useAuthContext = () =>{
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true)
    const userInfo = {
        user,
    }

    //Check if the user is logged in
    useEffect(() =>{
        const unsubscribed = auth.onAuthStateChanged((user) =>{
            console.log(user)
            setUser(user)
            setLoading(false)
            // alert(`Welcome ${user}`)
        });
        return () => {
            unsubscribed()
        }
    }, [])
  return (
    <AuthContext.Provider value={userInfo}>{!loading && children}</AuthContext.Provider>
  )
}

export default AuthProvider