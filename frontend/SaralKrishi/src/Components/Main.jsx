import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const productsData = [
  {
    id: 1,
    name: 'Organic Seeds',
    price: 500,
    image: 'path/to/image1.jpg',
    rating: 4.5,
    brand: 'Brand A',
  },
  {
    id: 2,
    name: 'Chemical Fertilizer',
    price: 300,
    image: 'path/to/image2.jpg',
    rating: 4.0,
    brand: 'Brand B',
  },
  // Add more products as needed
];

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded-lg p-4 m-2 shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-md" />
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
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  const handleChatbotClick = () => {
    navigate('/chatbot');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
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
