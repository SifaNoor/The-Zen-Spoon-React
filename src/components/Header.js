import React from 'react';

function Header() {
    return (
    <header>
        <nav>
            <div className="logo"> A Fusion Experience </div>
            <div className="hamburgermenu">☰</div>
            <ul className="navbar">
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li> <a href="#" id = "cartlink"> <i className="fa fa-shopping-cart carticon"> <span id = "itemcounter">0</span> </i> </a></li>
            </ul>
        </nav>
    </header>
    );
  }
  
  export default Header;