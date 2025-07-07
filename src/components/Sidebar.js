import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext.js';

function Sidebar({ isOpen, onClose }) {
  const {
    cart,
    totalItems,
    totalPrice,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  return (
    <div className={`shoppingsidebar ${isOpen ? 'open' : ''}`}>
      <div className="cartheading">
        <p>Shopping Cart ({totalItems})</p>
        <button className="exitcart" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="itemscart">
        {cart.length === 0 ? (
          <p className="emptycart">Your cart is currently empty.</p>
        ) : (
          cart.map(item => (
            <div key={item.name} className="itemcart">
              <div className="itemcartinfo">
                <span className="itemcartname">{item.name}</span>
                <span className="itemcartprice">
                  ${item.price.toFixed(2)} each
                </span>
                <div className="itembuttons">
                  <button className="changeQuantity" onClick={() => updateQuantity(item.name, -1)}>
                    -
                  </button>
                  <span className="quantity">{item.quantity}</span>
                  <button className="changeQuantity" onClick={() => updateQuantity(item.name, 1)}>
                    +
                  </button>
                  <button className="removeItem" onClick={() => removeFromCart(item.name)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cartfooter">
        <div className="totalcart">Total: ${totalPrice.toFixed(2)}</div>
        <button
        id="clearbutton"
        onClick={() => {
            if (cart.length === 0) {
                alert("Your cart is already empty.");
                return;
            }

            const confirmed = window.confirm("Please confirm you want to clear your cart.");
            if (confirmed) {
                clearCart();
            }
        }}
        >
        Clear Cart
        </button>
        <button
          id="checkoutbutton"
          onClick={() => {
            if (cart.length === 0) {
                alert('Your cart is currently empty.');
                return;
            }

            alert(`Thank you! Total: $${totalPrice.toFixed(2)}` + 
            "\nYou will be contacted once your order has been prepared.");
            clearCart();
            onClose();
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;