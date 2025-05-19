import React, { useState, useEffect } from "react";
import "./HomePage.css";

const imageList = ["/bconcept1.jpg", "/bconcept2.jpg", "/bconcept3.jpg", "/bconcept4.jpg"];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero" style={{ backgroundImage: `url(${imageList[currentIndex]})` }}>
        <div className="overlay">
          <h1>Are you sigma?</h1>
          <p>Crafting unforgettable events with impact.</p>
        </div>
  
        <button className="arrow left" onClick={goToPrev}>&#10094;</button>
        <button className="arrow right" onClick={goToNext}>&#10095;</button>
  
        <div className="dots">
          {imageList.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(idx)}
            ></span>
          ))}
        </div>
      </div>
  
      {/* 👇 Clients Section — moved OUTSIDE the hero */}
      <div className="clients-section">
        <h2>Our Clients</h2>
        <ul className="clients-list">
          <li>Adidas</li>
          <li>Spotify</li>
          <li>Samsung</li>
          <li>Red Bull</li>
          <li>Google</li>
        </ul>
      </div>
    </>
  );
  
  
}
