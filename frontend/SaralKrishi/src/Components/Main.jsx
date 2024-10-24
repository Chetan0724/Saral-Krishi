import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext'; // Import CartContext

const productsData = [
  {
    id: 1,
    name: 'Organic Seeds',
    price: 500,
    image: 'path/to/image1.jpg',
    rating: 4.5,
    brand: 'Brand A',
    category: 'Seeds',
  },
  {
    id: 2,
    name: 'Chemical Fertilizer',
    price: 300,
    image: 'path/to/image2.jpg',
    rating: 4.0,
    brand: 'Brand B',
    category: 'Fertilizers',
  },
  {
    id: 3,
    name: 'Garden Shovel',
    price: 1500,
    image: 'path/to/image3.jpg',
    rating: 4.2,
    brand: 'Brand C',
    category: 'Tools',
  },
  {
    id: 4,
    name: 'Planting Pots',
    price: 200,
    image: 'path/to/image4.jpg',
    rating: 4.8,
    brand: 'Brand D',
    category: 'Tools',
  },
  {
    id: 5,
    name: 'Organic Pesticide',
    price: 600,
    image: 'path/to/image5.jpg',
    rating: 4.3,
    brand: 'Brand E',
    category: 'Pesticides',
  },
  {
    id: 6,
    name: 'Compost Manure',
    price: 400,
    image: 'path/to/image6.jpg',
    rating: 4.6,
    brand: 'Brand F',
    category: 'Fertilizers',
  },
  {
    id: 7,
    name: 'Watering Can',
    price: 300,
    image: 'path/to/image7.jpg',
    rating: 4.1,
    brand: 'Brand G',
    category: 'Tools',
  },
  {
    id: 8,
    name: 'Garden Rake',
    price: 800,
    image: 'path/to/image8.jpg',
    rating: 4.4,
    brand: 'Brand H',
    category: 'Tools',
  },
  {
    id: 9,
    name: 'Herb Seeds',
    price: 250,
    image: 'path/to/image9.jpg',
    rating: 4.7,
    brand: 'Brand I',
    category: 'Seeds',
  },
  {
    id: 10,
    name: 'Soil Tester',
    price: 1200,
    image: 'path/to/image10.jpg',
    rating: 4.9,
    brand: 'Brand J',
    category: 'Tools',
  },
  {
    id: 11,
    name: 'Organic Fertilizer',
    price: 350,
    image: 'path/to/image11.jpg',
    rating: 4.5,
    brand: 'Brand K',
    category: 'Fertilizers',
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
        <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600" onClick={handleViewCart}>
          View Cart
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
