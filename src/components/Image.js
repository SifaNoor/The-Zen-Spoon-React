import React, { useState } from 'react';

const imageUrls = [
    "https://res.cloudinary.com/the-infatuation/image/upload/v1696012022/images/NYC_Anixi_FoodAmbiance_KatePrevite_00002_1_ih5boa.jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/d7/2f/99/check-out-thai-zappz.jpg",
    "https://img.freepik.com/free-photo/professional-chef-preparing-food-kitchen_23-2149728018.jpg",
    "https://www.prosper-design.com/wp-content/uploads/2021/06/Prosper-Chi-Asian-Restaurant-Rushen-Lakes-Focal-area-01-1024x682.jpg",
    "https://cdn.i-scmp.com/sites/default/files/styles/1020x680/public/d8/images/canvas/2024/07/29/057b6806-67cf-4821-ac3e-b9ddce3e0989_c08a5efb.jpg?itok=8ZeqpVvn&v=1722231873",
    "https://images.squarespace-cdn.com/content/v1/56fc8dd9ab48de8601f1c553/1697054257061-YVVH7X3EZMPDRFCBNQOS/DSC_7783.jpg"
  ];

function Image() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const plusSlides = (n) => {
      setCurrentIndex((prev) => (prev + n + imageUrls.length) % imageUrls.length);
    };
  
    const currentSlide = (n) => {
      setCurrentIndex(n - 1);
    };
      

    return (
        <section id="gallery">
        <p className="heading">GALLERY</p>
        <div className="imagecontainer">
            {imageUrls.map((url, index) => (
            <div
                className="slideimage"
                key={index}
                style={{ display: index === currentIndex ? 'block' : 'none' }}
            >
                <img src={url} alt={`Gallery Slide ${index + 1}`} />
            </div>
            ))}

            <button className="previmage" onClick={() => plusSlides(-1)}>&#10094;</button>
            <button className="nextimage" onClick={() => plusSlides(1)}>&#10095;</button>

            <br />
            <div style={{ textAlign: 'center' }}>
            {imageUrls.map((_, index) => (
                <span
                key={index}
                className={`dot${index === currentIndex ? ' active' : ''}`}
                onClick={() => currentSlide(index + 1)}
                ></span>
            ))}
            </div>

        </div>
        </section>

    );
}
  
export default Image;