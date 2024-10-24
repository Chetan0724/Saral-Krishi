import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [language, setLanguage] = useState('English');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const languages = ['English', 'Hindi', 'Bengali', 'Telugu', 'Marathi'];

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

        <input 
          type="text" 
          placeholder="Search..." 
          className="border border-gray-300 rounded-md p-2" 
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Search</button>
        
        <Link to="/signup" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Sign Up</Link>
        <Link to="/login" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Login</Link>
      </nav>

      {/* Display filtered products based on search query */}
      {/* {searchQuery && (
        <div className="absolute mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg">
          {filteredProducts.map(product => (
            <div key={product.id} className="px-4 py-2 hover:bg-green-100 cursor-pointer">
              {product.name}
            </div>
          ))}
        </div>
      )} */}
    </header>
  );
};

// Assume products is an array of product objects available in the scope
const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  // ... more products ...
];

export default Header;
