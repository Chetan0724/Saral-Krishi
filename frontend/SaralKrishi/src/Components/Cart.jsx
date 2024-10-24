import React, { useContext } from 'react';
import { CartContext } from './CartContext'; // Corrected import path

const Cart = () => {
  const { cart } = useContext(CartContext); // Use CartContext

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
              <p>Description: {product.description}</p>
              <img src={product.image} alt={product.name} style={{ width: '100px' }} />
              {/* Add more details as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
