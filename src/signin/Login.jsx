import React from 'react';
import { signInWithGoogle } from '../firebase/config';
import logo from './logo.svg' 

function Login() {
  return (
    <div className='login'>
        <img src={logo} alt="logo" /> <br />
        <button className='loginBtn' onClick={signInWithGoogle}>
            Sign In With Google
        </button>
    </div>
  )
}

export default Login