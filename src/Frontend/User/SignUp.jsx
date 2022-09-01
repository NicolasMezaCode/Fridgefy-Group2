import React, { useRef, useState } from 'react'
import { auth } from '../../Backend/firebase_config';
import { createUserWithEmailAndPassword, signInWithPopup,
  GoogleAuthProvider, } from 'firebase/auth';
import { useAuthContext } from '../../AuthContext';
import { Navigate } from 'react-router-dom';
const SignUp = () => {

    const { user } = useAuthContext()
    const emailInputRef = useRef();
    const passwordInputRef = useRef()

    const SignUpHandleSubmit = (e) =>{
        e.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        console.log('submit', enteredEmail, enteredPassword)

        createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword);
        return <Navigate to='/'></Navigate>
    }
  return (
    <>
    <h2>Sign up here</h2>
    <form onSubmit={SignUpHandleSubmit}>
        <div>
          <label htmlFor='emailInput'>Email</label>
          <input type='email' ref={emailInputRef} />
        </div>
        <label htmlFor='passwordInput'>Password</label>
        <input type='password' ref={passwordInputRef} />
        <div>
          <button>Sign up</button>
        </div>
    </form>
      <button onClick={() => console.log('logged in with Google')}>
        Sign in with Google
      </button>
    </>
  )
}

export default SignUp