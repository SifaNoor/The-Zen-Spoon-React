import React from 'react';

function About() {
    return (
        <section id="about">
        <p className = "heading">ABOUT US</p>
            <div className="aboutcontainer">
                <div className="aboutimage"><img src="https://pithandrind.com/wp-content/uploads/2022/10/Finished-egg-chive-dumplings-720x1080.jpg" alt ="Dumplings"/></div>
                <div className="abouttext">
                <p> The Zen Spoon was founded by a group of friends living in a diverse community in New York. They
                    would frequently experiment with different foods and flavors, often using recipes passed down in their families to create new dishes. <br></br>
                    One day, they had the idea to open a small stall to share with others their food and from there, 
                    they became so popular that they eventually were able to open their own restaurant. </p>
                <p>15 years later, The Zen Spoon is located in Flushing, in the very same
                    community where the idea for this restaurant had once begun. </p>
                <p>This restaurant has grown tremendously over the years, but the mission of it stays the same which is to introduce people to all the different types
                    of Asian cuisines that exist and perhaps try to encourage them to do a little experimenting of their own. </p>
                <p> It all started with cooking a plate of dumplings which gave us the opportunity to become something
                    so much bigger. If you are at our restaurant, ask us for our special dish (and we'll treat you with the dish that helped us come this far). </p>
                <p> We welcome you to our restaurant and hope you enjoy! </p>
                </div>
            </div>
        </section>
    );
}

export default About;