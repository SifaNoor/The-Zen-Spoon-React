import React, { useState, useContext } from 'react';
import { CartContext } from '../components/CartContext';

function Header({ onCartClick }) {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => { setNavOpen(!navOpen); };
    
    const closeNav = () => { setNavOpen(false); };

    const { totalItems } = useContext(CartContext);
    
    return (
    <header>
        <nav>
            <div className="logo"> A Fusion Experience </div>
            <div className="hamburgermenu" onClick={toggleNav}>☰</div>
            <ul className={`navbar ${navOpen ? 'responsive' : ''}`}>
                <li><a href="#home" onClick={closeNav}>Home</a></li>
                <li><a href="#menu" onClick={closeNav}>Menu</a></li>
                <li><a href="#about" onClick={closeNav}>About</a></li>
                <li><a href="#contact" onClick={closeNav}>Contact</a></li>
                <li> 
                    <a href="#!" id = "cartlink" onClick={(e) => { e.preventDefault(); onCartClick(); }}> 
                        <i className="fa fa-shopping-cart carticon"> 
                            <span id = "itemcounter">{totalItems}</span> 
                        </i> 
                    </a>
                </li>
            </ul>
        </nav>
    </header>
    );
  }
  
  export default Header;