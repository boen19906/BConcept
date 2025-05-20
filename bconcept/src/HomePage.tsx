import { useState, useEffect, useRef } from "react";
import "./HomePage.css";

const imageList: string[] = [
  "/bconcept1.jpg",
  "/bconcept2.jpg",
  "/bconcept3.jpg",
  "/bconcept4.jpg",
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 5000);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    );
    startInterval();
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    startInterval();
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
    startInterval();
  };

  return (
    <>
      <div
        className="hero"
        style={{ backgroundImage: `url(${imageList[currentIndex]})` }}
      >
        <div className="overlay">
          <h1>Are you sigma?</h1>
          <p>Crafting unforgettable events with impact.</p>
        </div>

        <button className="arrow left" onClick={goToPrev}>
          &#10094;
        </button>
        <button className="arrow right" onClick={goToNext}>
          &#10095;
        </button>

        <div className="dots">
          {imageList.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === currentIndex ? "active" : ""}`}
              onClick={() => goToIndex(idx)}
            ></span>
          ))}
        </div>
      </div>

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

      <div className="about-section">
        <h2>About Us</h2>
        <p className="about-text">
          Sigma Events is a creative event agency focused on delivering immersive
          and impactful experiences. We specialize in concept development,
          production, and flawless execution. Our team brings energy, innovation,
          and precision to every event — no matter the size.
        </p>
      </div>

      <div className="contact-section">
        <h2>Contact Us</h2>
        <p className="contact-text">
          Interested in working with us? Get in touch!
          <br />
          beconcept@vietnam.com
        </p>
      </div>
    </>
  );
}
