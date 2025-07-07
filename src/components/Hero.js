import React from 'react';

function Hero() {
    const scrollToMenu = () => {
        const menuSection = document.getElementById('menu');
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
    <div id= "home" className ="heroimage">
        <div className = "herotext">
            <div className="herologo"> The Zen Spoon</div>
            <p className = "herocaption"> Experience our authentic Asian cuisine made with traditional values and timeless recipes, all at one location.</p>
            <button className="menubutton" onClick={scrollToMenu}>View Menu</button>
        </div>
    </div>
    );
}
  
export default Hero;