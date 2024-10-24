import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const [language, setLanguage] = useState('English');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const languages = ['English', 'Hindi', 'Bengali', 'Telugu', 'Marathi'];

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route

  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("User signed out");
    }).catch((error) => {
      console.error("Sign out error:", error);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        
        // Redirect only if user is on login or signup page
        if (location.pathname === "/login" || location.pathname === "/signup") {
          navigate("/"); // Redirect to home if user logs in
        }
      } else {
        dispatch(removeUser());
        
        // Redirect to home if logged out and not on login/signup page
        if (location.pathname !== "/login" && location.pathname !== "/signup") {
          navigate("/"); // Home page redirect after logout
        }
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate, location.pathname]);

  const user = useSelector((store) => store.user);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-black">Saral Krishi</h1>
      <nav className="flex items-center space-x-4">
        <Link to="/" className="text-black hover:text-green-500">Home</Link>
        <Link to="/experts" className="text-black hover:text-green-500">Experts</Link>
        <Link to="/community" className="text-black hover:text-green-500">Community</Link>
        <Link to="/cart" className="text-black hover:text-green-500">Cart</Link>

        <div className="relative">
          <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-black hover:text-green-500">
            {language} ▼
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
              {languages.map((lang) => (
                <div key={lang} className="px-4 py-2 hover:bg-green-100 cursor-pointer" onClick={() => handleLanguageChange(lang)}>
                  {lang}
                </div>
              ))}
            </div>
          )}
        </div>

        <input type="text" placeholder="Search..." className="border border-gray-300 rounded-md p-2" />
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Search</button>

        {user?.uid ? (
          <>
            <p className="text-black">Hello, {user.displayName || user.email}</p>
            <button
              onClick={handleSignOut}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link to="/signup" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Sign Up</Link>
            <Link to="/login" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Login</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
