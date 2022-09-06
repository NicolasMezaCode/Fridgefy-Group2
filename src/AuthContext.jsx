import React, { createContext, useState, useContext, useEffect } from 'react'
import { auth } from './Backend/firebase_config';
import { Navigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const AuthContext = createContext();

export const useAuthContext = () =>{
    return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true)


    //Check if the user is logged in
    useEffect(() =>{
        const unsubscribed = auth.onAuthStateChanged((user) =>{
            setUser(user)
            setLoading(false)
        });
        return () => {
            unsubscribed()
        }
    }, [])
        //Sign in with Google
        const googleProvider = new GoogleAuthProvider();
        const loginWithGoogle = async (e) => {
          e.preventDefault();
          await signInWithPopup(auth, googleProvider);
          let userData = auth.currentUser;
          setUser(userData)
          return <Navigate to="/"></Navigate>;
        };

        const handleSignOut = () => {
          auth.signOut();
          alert("Successfully logged out");
        };

  return (
    <AuthContext.Provider value={{ user, loginWithGoogle, googleProvider, handleSignOut }}>{!loading && children}</AuthContext.Provider>
  )
}

export default AuthProvider
