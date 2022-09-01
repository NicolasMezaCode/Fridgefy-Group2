import React, {useRef} from 'react'
import { auth } from '../../Backend/firebase_config';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Link, Navigate } from 'react-router-dom';

const SignIn = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const googleProvider = new GoogleAuthProvider();

    const loginHandleSubmit = (e) =>{
        e.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        signInWithEmailAndPassword(auth, enteredEmail, enteredPassword);
    }

    const loginWithGoogle = async (e) =>{
        e.preventDefault();
        await signInWithPopup(auth, googleProvider)
        return <Navigate to='/'></Navigate>
    }
  return (
    <>
    <h2>SignIn</h2>
      <form onSubmit={loginHandleSubmit}>
        <div>
          <label htmlFor='emailInput'>Email</label>
          <input type='email' ref={emailInputRef} />
        </div>
        <label htmlFor='passwordInput'>Password</label>
        <input type='password' ref={passwordInputRef} />
        <div>
          <button>Sign in!</button>
        </div>
      </form>
      <button onClick={loginWithGoogle}>
        Sign in with Google
      </button>
      <div>
        Sign up <Link to={'/signup'}>here</Link>
      </div>
    </>
  )
}

export default SignIn;