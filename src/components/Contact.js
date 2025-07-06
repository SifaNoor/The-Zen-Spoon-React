import React from 'react';

function Contact() {
    return (
        <section id ="contact">
            <p className="heading">CONTACT US</p>
            <p className="contactsubheading">We would love to hear from you! Reach out to make a reservation, 
                ask any questions, or simply send a message.</p>
            <div className="contactcontainer">
                <div className="contactcontent">
                    <div className="contactinfo">
                        <div className="contactitem">
                            <h4><i className="fas fa-map-marker-alt"></i> Address</h4>
                                <p>136-20 38th Ave 2nd floor, Flushing, NY 11354</p>
                            <h4><i className="fas fa-phone-alt"></i> Phone</h4>
                                <p>(917) 123-4567</p>
                            <h4><i className="fas fa-envelope"></i> Email</h4>
                                <p>   hellozen@zenspoon.com</p>
                        </div>
                    </div>

                    <div className="contactform"> 
                        <form>
                            <input type="text" id="name" placeholder="Your Name" required />
                            <input type="email" id="email" placeholder="Your Email" required />
                            <textarea rows="5" id="message" placeholder="Your Message" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div> 
                </div>
            </div>

            <div id="map-container">
                <iframe title="Zen Spoon Location Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9944211071785!2d-73.83268152495703!3d40.7608306713864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2603e4e7c8e13%3A0xa85c948372e8cd01!2s136-20%2038th%20Ave%202nd%20floor%2C%20Flushing%2C%20NY%2011354!5e0!3m2!1sen!2sus!4v1718037276723!5m2!1sen!2sus"
                  width="100%" height="400" style={{border: 'none'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
              
        </section>
    );
}
  
export default Contact;