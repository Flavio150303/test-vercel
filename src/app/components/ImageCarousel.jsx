// src/components/ImageCarousel.jsx
"use client"; // Si estás usando Next.js, asegúrate que sea un Client Component

import React, { useState, useEffect } from "react";

const ImageCarousel = ({
  images = [
    "/images/carousel/VP300.png",
    "/images/carousel/B-90-R.png",
    "/images/carousel/TF5454D.png",
  ],
  autoSlide = true,
  autoSlideInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(nextSlide, autoSlideInterval);

    return () => clearInterval(slideInterval);
  }, [currentIndex, autoSlide]);

  // Agregar validación
  if (!images || images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden">
      <div
        className="flex w-full transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} />
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-3xl text-gray-500 p-2 rounded-full hover:text-green-400 transition"
      >
        &#10094; {/* Símbolo de flecha izquierda */}
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl text-gray-500 p-2 rounded-full hover:text-blue-400 transition"
      >
        &#10095; {/* Símbolo de flecha derecha */}
      </button>

      {/* Indicadores */}
      {/*    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`
              
              ${currentIndex === index ? "bg-white" : "bg-white/50"}
              cursor-pointer
            `}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ImageCarousel;
