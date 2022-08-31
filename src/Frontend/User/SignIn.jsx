import React, {useRef} from 'react'
import { auth } from '../../Backend/firebase_config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const loginHandleSubmit = (e) =>{
        e.preventDefault();
        const {email, password} = e.target.element;
        signInWithEmailAndPassword(auth, email, password);
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
      <button>
        Sign in with Google
      </button>
      <div>
        Sign up <Link to={'/signup'}>here</Link>
      </div>
    </>
  )
}

export default SignIn