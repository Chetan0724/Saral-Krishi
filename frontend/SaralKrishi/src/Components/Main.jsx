import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext'; // Import CartContext
import CotSeed from '../assets/kalgudi_cotton.jpeg'
import TomSeed from '../assets/salaar_tomato.jpeg'
import toolone from '../assets/toolone.jpg'; // Import toolone
import tooltwo from '../assets/tooltwo.jpg'; // Import tooltwo
import toolthree from '../assets/toolthree.png'; // Import toolthree
import toolfour from '../assets/toolfour.jpg'; // Import toolfour
import toolfive from '../assets/toolfive.jpg'; // Import toolfive
import toolsix from '../assets/toolsix.jpg'; // Import toolsix
import Alloy from '../assets/Alloy.jpg'
import ferone from '../assets/ferone.jpg'
import fertwo from '../assets/fertwo.jpg'
import ferthree from '../assets/ferthree.jpg'

const productsData = [
  {
    id: 1,
    name: 'Kalgudi - Cotton Hybrid Seeds',
    price: 500,
    image: CotSeed,
    rating: 4.5,
    brand: 'Brand A',
    category: 'Seeds',
  },
  {
    id: 2,
    name: 'Katyayani Calcium Nitrate 100% Water soluble Fertilizer',
    price: 300,
    image: ferone,
    rating: 4.0,
    brand: 'Brand B',
    category: 'Fertilizers',
  },
  {
    id: 3,
    name: 'Portable Grass Cutter Trimmer',
    price: 1500,
    image: toolone,
    rating: 4.2,
    brand: 'Brand C',
    category: 'Tools',
  },
  {
    id: 4,
    name: 'Pad Corp Operated Sprayer',
    price: 200,
    image: tooltwo,
    rating: 4.8,
    brand: 'Brand D',
    category: 'Tools',
  },
  {
    id: 5,
    name: 'Alloy',
    price: 600,
    image: Alloy,
    rating: 4.3,
    brand: 'Brand E',
    category: 'Pesticides',
  },
  {
    id: 6,
    name: 'Katyayani Potassium Nitrate Water Soluble Fertilizer',
    price: 400,
    image: fertwo,
    rating: 4.6,
    brand: 'Brand F',
    category: 'Fertilizers',
  },
  {
    id: 7,
    name: 'Farmio Sudarshan Brush Cutter',
    price: 300,
    image: toolthree,
    rating: 4.1,
    brand: 'Brand G',
    category: 'Tools',
  },
  {
    id: 8,
    name: 'Black HDPE 250 GSM Heavy Duty',
    price: 800,
    image: toolfour,
    rating: 4.4,
    brand: 'Brand H',
    category: 'Tools',
  },
  {
    id: 9,
    name: 'Salaar 3119 Tomato Seeds',
    price: 250,
    image: TomSeed,
    rating: 4.7,
    brand: 'Brand I',
    category: 'Seeds',
  },
  {
    id: 10,
    name: 'NCS Aura Flashlight Torch',
    price: 1200,
    image: toolfive,
    rating: 4.9,
    brand: 'Brand J',
    category: 'Tools',
  },
  {
    id: 11,
    name: 'GROMOR 13:00:45 Potassium Nitrate Fertilizer',
    price: 350,
    image: ferthree,
    rating: 4.5,
    brand: 'Brand K',
    category: 'Fertilizers',
  },
  {
    id: 12,
    name: 'Sakha Heavy Duty Hand Weeder',
    price: 900,
    image: toolsix,
    rating: 4.6,
    brand: 'Brand L',
    category: 'Tools',
  },
  // Add more products as needed
];

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded-lg p-4 m-2 shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-32 object-contain rounded-md" />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-700">Price: ₹{product.price}</p>
      <p className="text-yellow-500">Rating: {product.rating} ★</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mt-2" onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mt-2 ml-2">
        Buy Now
      </button>
    </div>
  );
};

const Main = () => {
  const [filter, setFilter] = useState({ category: '', price: '' });
  const { addToCart } = useContext(CartContext); // Use CartContext
  const navigate = useNavigate();

  // New function to handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  // Filtered products based on filter criteria
  const filteredProducts = productsData.filter(product => {
    return (
      (filter.category ? product.category === filter.category : true) &&
      (filter.price ? product.price <= filter.price : true) // Updated condition to check if price is set
    );
  });

  const handleChatbotClick = () => {
    navigate('/chatbot');
  };

  const handleAddToCart = (product) => {
    addToCart(product); // Ensure the complete product object is passed
  };

  const handleViewCart = () => {
    navigate('/cart'); // Navigate to Cart page
  };

  const handleSeeMoreProducts = () => {
    navigate('/products'); // Navigate to Products page instead of Cart
  };

  return (
    <div className="container mx-auto p-4">
      {/* Filter Options */}
      <div className="mb-4">
        <select name="category" onChange={handleFilterChange} className="mr-2">
          <option value="">All Categories</option>
          <option value="Seeds">Seeds</option>
          <option value="Fertilizers">Fertilizers</option>
          <option value="Tools">Tools</option>
          <option value="Pesticides">Pesticides</option>
        </select>
        <input
          type="number"
          name="price"
          placeholder="Max Price"
          onChange={handleFilterChange}
          className="border rounded-md p-2"
        />
      </div>

      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      
      {/* See More Products Button */}
      <div className="flex justify-center mt-4">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
          See More Products
        </button>
      </div>
      
      {/* Sticky Chatbot Button */}
      <button 
        className="fixed bottom-4 right-4 bg-green-300 text-black px-4 py-2 rounded-full hover:bg-green-400 hover:text-black" 
        onClick={handleChatbotClick}
      >
        Chatbot
      </button>
    </div>
  );
};

export default Main;
