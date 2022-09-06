import React, {useRef} from 'react'
import { auth } from '../../Backend/firebase_config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../AuthContext';

const SignIn = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const { loginWithGoogle } = useAuthContext()

    const loginHandleSubmit = (e) =>{
        e.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        signInWithEmailAndPassword(auth, enteredEmail, enteredPassword);
        alert(`Successfully logged in`);
    }

  return (
    <>
    <h2>Sign in</h2>
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
