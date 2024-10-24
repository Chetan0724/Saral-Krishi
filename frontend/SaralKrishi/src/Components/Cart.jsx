import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <>
          <button onClick={clearCart} style={{ marginBottom: '20px', backgroundColor: '#2196F3', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 15px' }}>
            Clear Cart
          </button> {/* Clear Cart button at the top */}
          <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {cart.map((product, index) => (
              <li key={index} style={{ margin: '10px 0', border: '1px solid #ccc', padding: '10px', borderRadius: '5px', width: '300px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', width: '100%' }}>
                  <img src={product.image} alt={product.name} style={{ width: '100px', marginRight: '10px' }} />
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: 0 }}>{product.name}</h3>
                    <p>Price: ₹{product.price}</p>
                    <p>Quantity: {product.quantity}</p> {/* Display quantity */}
                  </div>
                </div>
                <button onClick={() => removeFromCart(product.id)} style={{ marginTop: '10px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px' }}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Cart;
