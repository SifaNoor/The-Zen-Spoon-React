import React from 'react';

function Footer() {
    return (
        <footer id="footer">
        <div className = "footercontainer">
            <div className="footercontent">
                <p className="footertitle">Business Hours</p>
                <p>Monday - Thursday: 10:00 AM - 10:00 PM</p>
                <p>Friday: Closed</p>
                <p>Saturday - Sunday: 9:30 AM - 11:30 PM</p>
            </div>
            <div className="footercontent">
                <p className="footertitle">Follow Us</p>
                <div className="socialmedia">
                    <a href="https://www.facebook.com/springshabushabu/" target="_blank" rel="noreferrer" className="social-link"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.instagram.com/springshabushabu.flushing/?hl=en" target="_blank" rel="noreferrer" className="social-link"><i className="fab fa-instagram"></i></a>
                    <a href="https://x.com/springshabu" target="_blank" rel="noreferrer" className="social-link"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.yelp.com/biz/spring-shabu-shabu-flushing-6" target="_blank" rel="noreferrer" className="social-link"><i className="fab fa-yelp"></i></a>
                </div>
            </div> 
        </div>
        <div className="footer-bottom">
            <p>&copy; 2025 The Zen Spoon.</p>
        </div>
        </footer>
    );
}
  
export default Footer;