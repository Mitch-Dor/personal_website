import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../css/imageCarousel.css";

export default function ImageCarousel({ images, interval = 5000 }) { // interval in ms
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Autoplay effect
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, interval);

    return () => clearInterval(timer); // cleanup on unmount
  }, [current, interval]);

  return (
    <div className="customCarousel">
      <div className="arrow left" onClick={prev}>
        <FaChevronLeft />
      </div>
      <div className="arrow right" onClick={next}>
        <FaChevronRight />
      </div>
      {images.map((item, i) => (
        <div
          key={i}
          className={`carouselSlide ${i === current ? "active" : ""}`}
        >
          {i === current && (
            <>
              <img src={item.img} alt={item.desc} />
              <div className="imageDesc">{item.desc}</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
