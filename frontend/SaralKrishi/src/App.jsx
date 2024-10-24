import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Components/CartContext'; // Import CartProvider
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Chatbot from './Components/Chatbot';
import Experts from './Components/Experts';
import Login from './Components/Login'; // Add this import statement
import Signup from './Components/Signup'; // Add this import statement
import Community from './Components/Community'; // Add this import statement
import Cart from './Components/Cart'; // Add this import statement

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/community" element={<Community />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
