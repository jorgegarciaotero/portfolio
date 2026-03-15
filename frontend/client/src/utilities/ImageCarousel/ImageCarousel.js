import React, { useState } from 'react';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="carousel-container">
      <div className="carousel-arrow left-arrow" onClick={goToPrevious}>
        &#10094;
      </div>
      <div className="carousel-slide-wrapper">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
      </div>
      <div className="carousel-arrow right-arrow" onClick={goToNext}>
        &#10095;
      </div>
      
      <div className="carousel-dots-container">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            className={`carousel-dot ${currentIndex === slideIndex ? 'active' : ''}`}
            onClick={() => goToSlide(slideIndex)}
          >
            &#9679;
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
