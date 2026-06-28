import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const goToPrevious = (e) => {
    if (e) e.stopPropagation();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (e) => {
    if (e) e.stopPropagation();
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const openLightbox = () => {
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, currentIndex]);

  if (!images || images.length === 0) return null;

  return (
    <div className="carousel-container">
      <div className="carousel-arrow left-arrow" onClick={goToPrevious}>
        &#10094;
      </div>
      <div className="carousel-slide-wrapper">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="carousel-image"
          onClick={openLightbox}
        />
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

      {isOpen && ReactDOM.createPortal(
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {images.length > 1 && (
              <button className="lightbox-arrow lightbox-left" onClick={goToPrevious}>
                &#10094;
              </button>
            )}
            <img src={images[currentIndex]} alt={`Zoomed Slide ${currentIndex}`} className="lightbox-image" />
            {images.length > 1 && (
              <button className="lightbox-arrow lightbox-right" onClick={goToNext}>
                &#10095;
              </button>
            )}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default ImageCarousel;
