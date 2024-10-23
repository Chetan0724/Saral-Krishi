import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Chatbot from './Components/Chatbot';
import Experts from './Components/Experts';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chatbot" element={<Chatbot />} /> {/* This route renders the Chatbot component */}
        <Route path="/experts" element={<Experts />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
