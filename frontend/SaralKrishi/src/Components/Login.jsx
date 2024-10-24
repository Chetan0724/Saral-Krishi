import React, { useRef, useState, useEffect } from 'react';
import { checkValidData } from '../utils/Validate';
import { googleLogin, signIn } from '../utils/SignUpSignIn';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast'; // Import react-hot-toast
import { googleLogo } from '../utils/constants';

const Login = () => {
  const [error, setError] = useState('');
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const user = useSelector((store) => store.user); // Get user from redux store

  const handleLogin = (e) => {
    e.preventDefault();
  
    // Validate email and password
    const message = checkValidData(emailRef.current.value, passwordRef.current.value);
    setError(message);
  
    // Exit if validation fails
    if (message) return;
  
    // Call signIn with email and password values
    signIn(emailRef.current.value, passwordRef.current.value, setError);
  };

  const handleGoogleLogin = ()=>{
    googleLogin(setError);
}

  // Show popup when user logs in successfully
  useEffect(() => {
    if (user && user.email) {
      toast.success('User logged in successfully!', {
        duration: 2000, // Show the popup for 2 seconds
      });
    }
  }, [user]); // Run this effect when user changes

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Login to SaralKrishi</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            ref={passwordRef}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="flex items-center flex-col">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
          or 
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="w-fit border rounded-lg text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
          >
            <img src={googleLogo} alt="" className='h-10' />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
