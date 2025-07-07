import './App.css';
import React, { useState } from 'react';
import { CartProvider } from './components/CartContext.js';
import Sidebar from './components/Sidebar';
import './styles/style.css';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Menu from './components/Menu.js';
import About from './components/About.js';
import Image from './components/Image.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';


// function AppWrapper() {
//   return (
//     <CartProvider>
//       <App />
//     </CartProvider>
//   );
// }

function AppContent() {
  const [toast, setToast] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 2000);
  };

  return (
    <>
      {toast && <div className="cart-toast">{toast}</div>}
      <Header onCartClick={() => setIsCartOpen(true)} />
      <Sidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      {isCartOpen && <div className="overlay" onClick={() => setIsCartOpen(false)}></div>}
      <Hero />
      <Menu
        onAddToCart={() => {
          showToast("Item has been added to cart!");
        }}
      />
      <About />
      <Image />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
